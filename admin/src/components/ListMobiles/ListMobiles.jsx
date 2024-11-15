import React,{ useState, useEffect } from 'react'
import axios from "axios"
import { toast } from 'react-toastify';

const ListMobiles = ({url}) => {
    const[list, setList] = useState([]);

    const fetchList = async () => {
      const response = await axios.get(`${url}/api/mobile/listmobile`)
    //   console.log(response.data);
  
      if(response.data.success){
        setList(response.data.data);
      }
      else{
        toast.error("Error");
      }
    }

    useEffect(() => {
        fetchList();
    },[])

    const removeMobile = async(mobileId) => {
        // console.log(mobileId);
        const response = await axios.post(`${url}/api/mobile/remove`, {id: mobileId})
        await fetchList(); //to display new data after deleting
        if (response.data.success) {
            toast.success(response.data.message)
        } else {
            toast.error("Error");
        }
    }

  return (
    <div className='flex flex-col'>
        <p className="text-lg font-bold mb-4">All Mobiles Card List</p>
        <div className="overflow-auto">
            <div className="min-w-full">
                <div className="grid grid-cols-[repeat(14,1fr)] items-center gap-2 p-3 border border-gray-300 text-sm">
                    <b className="text-left">Image</b>
                    <b className="text-left">Name</b>
                    <b className="text-left">Description</b>
                    <b className="text-left">Brand</b>
                    <b className="text-left">RAM</b>
                    {/* <b className="text-left">Storage</b> */}
                    <b className="text-left">Screen Size</b>
                    <b className="text-left">B Camera</b>
                    <b className="text-left">F Camera</b>
                    <b className="text-left">Processor</b>
                    <b className="text-left">Resolution</b>
                    <b className="text-left">Network</b>
                    <b className="text-left">Price</b>
                    <b className="text-left">Action</b>
                </div>

                {list.map((item, index) => {
                    return(
                    <div key={index} className="grid grid-cols-[repeat(13,1fr)] items-center gap-2 p-3 border border-gray-300 text-sm">
                        <img src={`${url}/images/`+item.image} alt="" className="w-12"/>
                        <p>{item.name}</p>
                        <p>{item.description}</p>
                        <p>{item.brand}</p>
                        {/* <p>{item.ram}</p>
                        <p>{item.storage}</p> */}
                        <p>{item.screenSize}</p>
                        <p>{item.primaryCamera}</p>
                        <p>{item.secondaryCamera}</p>
                        <p>{item.processorBrand}</p>
                        <p>{item.resolution}</p>
                        <p>{item.network}</p>
                        <p>{item.price}</p>
                        <p onClick={() => removeMobile(item._id)} className='cursor-pointer'>X</p>
                    </div>
                )
            })}
            </div>
        </div>
    </div>
  )
}

export default ListMobiles