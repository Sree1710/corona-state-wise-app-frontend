import React, { useState } from 'react'
import Header from './Header'

const AddStateDetails = () => {
    const [inputField,setInputField]=useState(
        {loc:"",confirmedCasesIndian:"",confirmedCasesForeign:"",discharged:"",deaths:""}
    )

    const inputHandler=(event)=>{
        setInputField({...inputField,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        console.log(inputField)
    }
  return (
    <div>
        <Header/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <h1>Add State Details</h1>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Location</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="loc" value={inputField.loc} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Confirmed Cases(Indian)</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="confirmedCasesIndian" value={inputField.confirmedCasesIndian} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Confirmed Cases(Foreign)</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="confirmedCasesForeign" value={inputField.confirmedCasesForeign} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Discharged Count</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="discharged" value={inputField.discharged} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Death Count</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="deaths" value={inputField.deaths} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button onClick={readValue} className="btn btn-danger">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddStateDetails