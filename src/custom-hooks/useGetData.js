import { collection, getDocs, onSnapshot } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from '../firebaseConfig'

const useGetData = (collectionName) => {
  const [datas, setdata] = useState([])
  const dbCollection = collection(db, collectionName)
  const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   const getData = async () => {
  //     //   get data from firebase store
  //     const dataResult = await getDocs(dbCollection)
  //     setdata(dataResult.docs.map((item) => ({ ...item.data(), id: item.id })))
  //     setLoading(false)
  //   }
  //   getData()
  // }, [dbCollection])

  useEffect(() => {
    // firebase firestore realtime data update
    const getUpdateData = async () => {
      onSnapshot(dbCollection, (snapshot) => {
        setdata(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
        setLoading(false)
      })
    }
    getUpdateData()
  }, [])

  // useEffect(() => {
  //   setLoading(true)
  //   const getData = async () => {
  //     onSnapshot(dbCollection, (snapshot) => {
  //       let list = []
  //       snapshot.docs.map((item) => {
  //         list.push({ id: item.id, ...item.data() })
  //       })
  //       setdata(list)
  //       setLoading(false)
  //     })
  //   }

  //   return () => {
  //     getData()
  //   }
  // }, [])
  return { datas, loading }
}

export default useGetData
