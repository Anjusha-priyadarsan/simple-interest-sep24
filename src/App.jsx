
import { Button, Stack, TextField } from '@mui/material'
import './App.css'
import { useState } from 'react'


function App() {

  const [amount, setAmount] = useState("")
  const [rate, setRate] = useState("")
  const [year, setYear] = useState("")
  const [interest,setInterest]=useState(0)

  const [isInvalidPrinciple,setIsInvalidPrinciple]=useState(false)
  const [isInvalidRate,setIsInvalidRate]=useState(false)
  const [isInvalidYear,setIsInvalidYear]=useState(false)


  console.log(interest);

  const validRegex=/^[0-9]*.?[0-9]+$/


  const validateInput = (e) => {
    console.log(e);

    const { name, value } = e.target
    console.log(name, value);

    if (name == 'principle') {

      setAmount(value)
    }
    else if (name == 'rate') {
      setRate(value)
    }
    else {
      setYear(value)

    }

   if( validRegex.test(value) || value==""){

    if(name=='principle'){
      setIsInvalidPrinciple(false)
    }
    else if(name=='rate'){
      setIsInvalidRate(false)
    }
    else{
      setIsInvalidYear(false)
    }

   }
   else{

    if(name=='principle'){
      setIsInvalidPrinciple(true)
    }
    else if(name=='rate'){
      setIsInvalidRate(true)
    }
    else{

      setIsInvalidYear(true)
    }

   }


  }
  const handleCalculte=(e)=>{
    e.preventDefault()

    console.log("calculate simple interest");
    if(amount && rate && year){

      setInterest((amount*rate*year)/100)



    }
    else{
      alert("please enter the field completly")
    }
    
  }

  const handleReset=()=>{

    setAmount("")
    setRate("")
    setYear("")
    setInterest(0)
    isInvalidPrinciple(false)
    isInvalidRate(false)
    isInvalidYear(fasle)
  }

  return (
    <>
      <div className="bg-dark d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', width: '100%' }}>
        <div className='bg-light rounded p-5' style={{ width: '550px' }}>
          <h1>Simple Interset Calculator</h1>
          <p>Calculate Your Simple Interest Easily</p>
          <div className='text-light bg-warning rounded d-flex flex-column align-items-center justify-content-center' style={{ height: '150px' }}>
            <h1 style={{ fontSize: '50px' }} >₹ &nbsp;{interest}</h1>
            <h1>Total Simple Intereset</h1>

          </div>
          <form className='mt-3'>

            <TextField onChange={validateInput} value={amount || ""} name='principle' id="priciple_amount" label="Amount" variant="outlined" className='w-100 mb-3' />
            { isInvalidPrinciple &&
              <div className='fw-bold text-danger'>Invalid Principle Amount</div>
              }
            <TextField onChange={validateInput} value={rate || ""} name='rate' id="interest_rate" label="Rate" variant="outlined" className='w-100 mb-3' />
            { isInvalidRate &&
              <div className='fw-bold text-danger'>Invalid Interest Rate</div>
              }
            <TextField onChange={validateInput} value={year || ""} name='year' id="time_period" label="Year" variant="outlined" className='w-100 mb-3' />
            { isInvalidYear &&
              <div className='fw-bold text-danger'>Invalid Year</div>
              }
            <Stack direction="row" >
              <Button type='submit' onClick={handleCalculte} disabled={isInvalidPrinciple || isInvalidRate || isInvalidYear} className='bg-dark me-3 w-50' variant="contained">Calculate</Button>
              <Button onClick={handleReset}  className=' me-3 w-50' variant="outlined">Reset</Button>
            </Stack>



          </form>
        </div>
      </div>
    </>
  )
}

export default App
