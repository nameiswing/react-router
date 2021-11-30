import { useState, useEffect } from "react";
import styled from '@emotion/styled';

const Example = () => {

    // const [ count, setCount ] = useState(0);
    // const [ userName, setUserName ] = useState('Lemuel');
    // const [ timer, setTimer ] = useState(0);
    // const [ isActive, setIsActive ] = useState(false);

    const [ product, setProduct ] = useState({ name: '', price: '' });
    const [ totalValue, setTotalValue ] = useState( () => {
        if(!!localStorage.inventory) return [...JSON.parse(localStorage.getItem('inventory'))]
        else return [];
    });

    const handleProdNameChange = (e) => {
        setProduct({...product, name: e.target.value})
    }
    const handleProdPriceChange = (e) => {
        if(e.target.value < 0 ) return;
        setProduct({...product, price: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        if( product.name !== '' && product.price > 0 ) {
            const productInfo = {...product, id: Date.now()};
            setTotalValue([...totalValue, productInfo]);
        } else {
            window.alert('Invalid Input.')
        }
        setProduct({ name: '', price: '' })
    }

    const deleteAll = () => {
        if(totalValue.length < 1) return alert('Nothing to Delete.');
        let response = window.confirm('Delete All?');
        response && setTotalValue([]);
    }
    const deleteItem = (targetId) => {
        let index = totalValue.indexOf(totalValue.find( item => item.id === targetId)); //since ID is unique, okay to use find(stops search after first match)
        console.log(index);
        window.confirm('Delete Item?') && setTotalValue( totalValue.filter( item => item.id !== targetId) )
    }

    useEffect( () => {
        localStorage.setItem('inventory', JSON.stringify(totalValue));
    }, [totalValue])

    
    return (
        <>
        <Container>
            <h1>Product Information</h1>
            <form name="inventory" style={{width: '18rem', margin: '0 auto', textAlign: 'right'}} onSubmit={e=>handleSubmit(e)}>
                <div style={{display:'flex', alignItems: 'center', justifyContent:'space-between', marginBottom: '.5rem'}}>
                    <label htmlFor="product">Product: </label>&nbsp;&nbsp;
                    <Input 
                        type="text" 
                        name="product" 
                        id="product" 
                        value={product.name} 
                        onChange={handleProdNameChange}
                    />
                </div>
                <div style={{display:'flex', alignItems: 'center', justifyContent:'space-between', marginBottom: '.5rem'}}>
                    <label htmlFor="amount">Amount: </label>&nbsp;&nbsp;
                    <Input 
                        type="number" 
                        name="amount" 
                        id="amount"  
                        value={product.price} 
                        onChange={handleProdPriceChange}
                    />
                </div>
                
                <input 
                    type="button" 
                    value="Reset" 
                    onClick={()=>setProduct({ name: '', price: '' })} 
                    style={{display: 'inline-block', padding: '.5rem 1rem', marginRight: '.25rem'}}
                />
                <input type="submit" value="Submit" style={{display: 'inline-block', padding: '.5rem 1rem'}}/>
            </form>
            <table  
                style={{
                    width: '18rem', 
                    margin: '2rem auto', 
                    textAlign: 'left',
                    borderCollapse: 'collapse',
                    padding: '1rem',
                }}>
                <thead>
                    <tr>
                        <th style={{border: '1px solid #666', padding: '.5rem 1rem'}}>Name</th>
                        <th style={{border: '1px solid #666', padding: '.5rem 1rem'}}>Amount</th>
                        <th 
                            style={{
                                border: '1px solid #666', 
                                padding: '.5rem', 
                                fontSize: '1.25rem', 
                                textAlign:'center',
                                color:'red', 
                                cursor:'pointer', 
                            }}
                            onClick={deleteAll}
                        >&times;</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        totalValue.map( item => (
                            <tr key={item.name + item.price} >
                                <td style={{border: '1px solid #666', padding: '.5rem 1rem'}}>{item.name}</td>
                                <td style={{border: '1px solid #666', padding: '.5rem 1rem'}}>{item.price}</td>
                                <td 
                                    style={{
                                        border: '1px solid #666',
                                        fontSize: '1rem', 
                                        color:'red', 
                                        cursor:'pointer', 
                                        fontWeight: 'bold', 
                                        textAlign:'center',
                                    }}
                                    onClick={() => deleteItem(item.id)}
                                >&times;</td>
                            </tr>
                            ) 
                        )
                    }
                    <tr>
                        <td style={{padding: '.5rem 1rem'}}><b>Total: </b></td>
                        <td style={{padding: '.5rem 1rem'}}>
                            <b>{ totalValue.length > 0 && totalValue.map( item => item.price ).reduce( (a, b) => +(a) + +(b)) }</b>
                        </td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </Container>
        {/* <Container>
            <h6 style={{margin:0}}>Hello! This is {userName}.</h6>
            <Input type="text" value={userName} onChange={ e => setUserName(e.target.value)}/>

            <div>You clicked {count} times.</div>
            <Button onClick={ () => setCount( count + 1 )}>Increment</Button>
            <Button onClick={ () => setCount(0)}>Reset</Button>
        </Container>
        <Container>
            <h6 style={{fontWeight: '400', margin:0}}>This is the Timer</h6>
            <div>{ timer }</div>
            <Button onClick={() => setIsActive(!isActive)}>{!isActive ? 'Start': 'Pause'}</Button>
            <Button onClick={() => reset()}>Reset</Button>
        </Container> */}
        </>
    )
}

export default Example

//STYLED COMPONENTS - @emotion/styled
const Container = styled.div`
    padding: 2rem;
    text-align: center;
    /* font-size: 2rem; */
`
// const Button = styled.button`
//     padding: .5rem 1rem;
//     font-size: 1rem;
//     cursor: pointer;
//     margin: 0 .25rem;
// `
const Input = styled.input`
    font-size: 1rem;
    padding: .25rem .5rem;
`