import React, { useEffect, useState } from 'react'
import { FaFilter } from 'react-icons/fa'
import Cards from '../../Components/Cards'
import { useTranslation } from 'react-i18next';



const Products = () => {
    const { t } = useTranslation();
    const[products, setProducts] = useState([])
    const [filteredItems,setFilteredItems] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("all")
    const [sortOption, setSortOption] = useState("default")

    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const response= await fetch("products.json")
                const data = await response.json()
                // console.log(data);
                setProducts(data)
                setFilteredItems(data)
            }catch(error){
                console.log("Error fetching data: ",error);
            }
        }

        fetchData()
    },[])
    // console.log(products)
    const filterItems = (category)=>{
        const filtered = category === "all"?(products):products.filter((item)=>item.category===category)
        setFilteredItems(filtered)
        setSelectedCategory(category)
    }

    const showAll =()=>{
        setFilteredItems(products)
        setSelectedCategory("all")
    }
    
    const handleSortChange=(option)=>{
        setSortOption(option)

        let sortedItems = [...filteredItems];
        switch(option){
            case"A-Z":
                sortedItems.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case "Z-A":
                sortedItems.sort((a, b) => b.title.localeCompare(a.title));
                break;
            case "low-hight":
                sortedItems.sort((a, b) => a.price - b.price);
                break;
            case "hight-low":
                sortedItems.sort((a, b) => b.price - a.price);
                break;
            default:
                break
        }

        setFilteredItems(sortedItems)
    }
    

  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-28 px-4 mb-12'>
        <h2 className='title'>{t('info.title')}</h2>
        
        <div>
            <div className='flex flex-col md:flex-col flex-wrap md:justify-between items-center space-y-3 mb-8'>
        
            <div className='flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap'>
                <button onClick={showAll}>{t('info.allProduct')}</button>
                <button onClick={()=>filterItems("Dress")}>{t('info.clothing')}</button>
                <button onClick={()=>filterItems("Hoodies")}>{t('info.hoodie')}</button>
                <button onClick={()=>filterItems("Bag")}>{t('info.bags')}</button>
            </div>

            <div className='flex justify-end mb-4 rounded-sm'>
                <div className='bg-black p-2'>
                    <FaFilter className='text-white h-4 w-4'/>
                </div>
                <select id='sort' onChange={(e)=>handleSortChange(e.target.value)} value={sortOption} className='bg-black text-white px-2 py-1 rounded-sm'>
                    <option value="default">{t('info.default')}</option>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                    <option value="low-hight">{t('info.low-hight')}</option>
                    <option value="hight-low">{t('info.hight-low')}</option>
                </select>
            </div>
            </div>

            <Cards filteredItems={filteredItems}/>
        </div>
    </div>
  )
}

export default Products