import React,{ useState, useEffect } from 'react'
import axios from "axios"
import { toast } from 'react-toastify';

const ListLaptops = ({url}) => {
    const[list, setList] = useState([]);

    const fetchList = async () => {
      const response = await axios.get(`${url}/api/laptop/list`)
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

    const removeLaptop = async(laptopId) => {
        // console.log(laptopId);
        const response = await axios.post(`${url}/api/laptop/remove`, {id: laptopId})
        await fetchList(); //to display new data after deleting
        if (response.data.success) {
            toast.success(response.data.message)
        } else {
            toast.error("Error");
        }
    }
    
  return (
    <div className='flex flex-col'>
        <p className="text-lg font-bold mb-4">All Laptops Card List</p>
        <div className="overflow-auto">
            <div className="min-w-full">
                <div className="grid grid-cols-[repeat(13,1fr)] items-center gap-2 p-3 border border-gray-300 text-sm">
                    <b className="text-left">Image</b>
                    <b className="text-left">Name</b>
                    <b className="text-left">Description</b>
                    <b className="text-left">Usage</b>
                    <b className="text-left">Brand</b>
                    <b className="text-left">CPU Brand</b>
                    <b className="text-left">Processor</b>
                    <b className="text-left">GPU</b>
                    <b className="text-left">RAM</b>
                    <b className="text-left">Screen Size</b>
                    <b className="text-left">Operating System</b>
                    <b className="text-left">Price</b>
                    <b className="text-left">Action</b>
                </div>

                {list.map((item, index) => {
                    return(
                    <div key={index} className="grid grid-cols-[repeat(13,1fr)] items-center gap-2 p-3 border border-gray-300 text-sm">
                        <img src={`${url}/images/` + item.image} alt="" className="w-12"/>
                        <p>{item.name}</p>
                        <p>{item.description}</p>
                        <p>{item.usage}</p>
                        <p>{item.brand}</p>
                        <p>{item.CPU_Brand}</p>
                        <p>{item.processor}</p>
                        <p>{item.gpu}</p>
                        <p>{item.ram}</p>
                        <p>{item.screenSize}</p>
                        <p>{item.operatingSystem}</p>
                        <p>{item.price}</p>
                        <p onClick={() => removeLaptop(item._id)} className='cursor-pointer'>X</p>
                    </div>
                )
            })}
            </div>
        </div>
    </div>
  )
}

export default ListLaptops