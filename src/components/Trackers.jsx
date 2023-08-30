import { useEffect, useState } from 'react';
import Tracker from './Tracker';
import { nanoid } from 'nanoid';
import { Button } from '@mui/material';

const TEMPLATE = {
  id: "",
  title: 'New Practice',
  target: 5,
  usePenalty: true,
  left: 5,
  last: "",
};

const LS_ITEM_NAME = "trackers"

export default function Trackers() {
  const load = () => JSON.parse(localStorage.getItem(LS_ITEM_NAME))
  const save = (data) => localStorage.setItem(LS_ITEM_NAME, JSON.stringify(data))

  const getNewPractice = () => ({...TEMPLATE, id: nanoid()})

  const [data, setData] = useState(load() || [getNewPractice()])

  useEffect(() => {
    save(data)
  }, [data])

  const create = () => {
    const newData = [...data, getNewPractice()]
    setData(newData)
  }

  const remove = (id) => {
    const newData = data.filter((it) => it.id !== id)
    setData(newData)
  }

  const update = (tracker) => {
    const newData = data.map((it) =>
      it.id === tracker.id ? tracker : it)
    setData(newData)
  }

  const actions = {update, remove}

  return (
    <>
      {data?.map((it) => <Tracker data={it} actions={actions} key={it.id} />)}
      <Button variant="outlined" onClick={create}>Create</Button>
    </>
  );
}
