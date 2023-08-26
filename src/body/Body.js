import './Body.css';
import Card from '../card/Card';
import { useState } from 'react';
import { useEffect } from 'react';
export default function Body(){

    const [arr,setarr]=useState([])

    useEffect(()=>{
        const fan=async()=>{
            const url="https://fakestoreapi.com/products"
            await fetch(url,{
                method:"Get"
            }).then(response=>{
                return response.json()
            })
            .then( data=>{
                console.log(data)
                setarr(data)
                console.log(arr)
            })
            .catch((error)=>{
                alert('some error has ocur')
            })
        }
    fan()
    },[])





    return(
        <>
            <section className="section">
                <h1>New Product</h1>
                <div className='border'></div>
            </section>
            <div className='clot'>
                <div className='menus'>
                     <ul>
                        <li className='c'>Apparel</li>
                        <li className='a'>ACCESSORIES</li>
                        <li className='c'>Best Seller</li>
                        <li className='c'>50% off</li>
                     </ul>
                 </div>
                 <div className='insert'>
                    {arr.map( (key,index)=>(
                        <Card key={index} img={key.image} title={key.title} price={key.price} description={key.description}></Card>

                        )   
                    )
                    }
                </div>
                
            </div>
          
        </>
    )
}