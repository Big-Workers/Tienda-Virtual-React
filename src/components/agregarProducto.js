import { Fragment } from "react";
import React,{useState} from React;


export default function Formulariologin(){
const [ nombre,setNombre]= useState ("");


    return(
        <Fragment>
            <h2>AGREGAR PRODUCTO</h2>
            <form>
                <lebel for= "nombre">nombre</lebel>
                <input type="tex" id="nombre" name="nombre" value="" onChange={(e)=>setNombre()}></input>
                
                    

            
            </form>

            

        </Fragment>

        );
    }
