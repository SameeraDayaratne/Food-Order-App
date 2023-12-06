 export async function fetchAvailableMeals(){
    const response = await fetch('http://localhost:3000/meals');
    const meals = await response.json();

    if(!response.ok)
    {
        throw new Error('Could Not Fetch Meals');
    }

    return meals;
}

export async function submitOrder(order){



    const response = await fetch('http://localhost:3000/orders', {
        method: 'POST',
        body: JSON.stringify({order}),
        headers:{
            'Content-Type' : 'application/json'
        }
    })

    const resData = await response.json();

    if(!response.ok)
    {
        throw new Error('Could not submit the order');
    }

    return resData;
}