import React, { useEffect, useState } from 'react'
import Header from './Header'
import axios from 'axios'

const ViewStateDetails = () => {
    const [covidStateData, setData] = useState(
        { "data": { "regional": [] } }


    )

    const [isLoading, setIsLoading] = useState(true)

    const getData = () => {
        axios.get("https://api.rootnet.in/covid19-in/stats/latest").then(
            (Response) => {
                setData(Response.data)
                setIsLoading(false)
            }
        )
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <div>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <h1>View State Details</h1>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Location</th>
                                            <th scope="col">Confirmed Cases(Indian)</th>
                                            <th scope="col">Confirmed Cases(Foreign)</th>
                                            <th scope="col">Discharged</th>
                                            <th scope="col">Deaths</th>
                                            <th scope="col">Total Cases</th>
                                        </tr>
                                    </thead>
                                    {isLoading ? <div class="d-flex justify-content-center">
                                        <div class="spinner-border" role="status">
                                            <span class="visually-hidden">Loading...</span>
                                        </div>
                                    </div> : <tbody>
                                        {covidStateData.data.regional.map(
                                            (value, index) => {
                                                return <tr>
                                                    <th scope="row">{value.loc}</th>
                                                    <td>{value.confirmedCasesIndian}</td>
                                                    <td>{value.confirmedCasesForeign}</td>
                                                    <td>{value.discharged}</td>
                                                    <td>{value.deaths}</td>
                                                    <td>{value.totalConfirmed}</td>
                                                </tr>
                                            }
                                        )}
                                    </tbody>}
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewStateDetails