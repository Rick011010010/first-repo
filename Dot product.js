let Vector_1 = {
    projection_On_OX1 : 10,
    projection_On_OY1: 3,
    projection_On_OZ1 : 0,

}

let Vector_2 = {
    projection_On_OX2 : 10,
    projection_On_OY2 : 9,
    projection_On_OZ3 : 3,

}

let array_Vector1 = Object.values(Vector_1);
let array_Vector2 = Object.values(Vector_2);

function dot_product () {
    for (let i = 0 ; i< array_Vector1.length; i++){
        return product_Vector[i] = array_Vector1[i]*array_Vector2[i]; 
    }
    
    if (product_Vector == 0) {
        return "the vectors are orthogonal"

    }
}

return product_Vector;








