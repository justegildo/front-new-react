import React, { useEffect, useState } from 'react';
import { IngredientService } from '../../_services/ingredient.service';

const Ingredient = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        IngredientService.getAll()
            .then(response => console.log(response))
            .catch(err => console.error(err))

    }, [])

    return (
        <div>
            Ingredient
        </div>
    );
};

export default Ingredient;