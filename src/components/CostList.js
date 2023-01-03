import React, { useState } from 'react';
import { useEffect } from 'react'
import '../css/app.css';

export const CostList = () => {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/Cost/GetAll")
      .then(res => res.json())
      .then(
        (result) => {
          // setIsLoaded(true);
          setItems(result.theCostContractList);
        },
        (error) => {
          // setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <table class="table table-responsive-sm">
        <thead>
          <tr>
            <th>#</th>
            <th>نام</th>
            <th>نام خانوادگی</th>
            <th>نام کاربری</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr>{item.amount}
              {item.name} {item.price}
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
}