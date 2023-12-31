import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Box } from '@mui/material'

import { Video, ChannelCard} from './'
import { fetchFromAPI } from "../utils/fetchFromAPI"

const ChannelDetail = () => {
  const [channelDetail, setchannelDetail] = useState(null)
  const [videos, setvideos] = useState([])

  const { id } = useParams()
  console.log(channelDetail)
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => setchannelDetail(data?.items[0]))

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=data`).then((data) => setvideos(data?.items))
  }, [id])

  return (
    <div>ChannelDetail</div>
  )
}

export default ChannelDetail