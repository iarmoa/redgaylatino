import React from 'react';
import { VectorMap } from '@south-paw/react-vector-maps';
import data from './data-map';
import styled from 'styled-components';

const MapContainer = styled.div`
    svg{
        stroke: #fff;
        
        path{
            outline: none;
        }

        path[id="argentina"]:hover, path[id="belize"]:hover, path[id="bolivia"]:hover, path[id="brazil"]:hover, path[id="chile"]:hover,
        path[id="colombia"]:hover, path[id="bolivia"]:hover, path[id="chile"]:hover, path[id="colombia"]:hover, path[id="cuba"]:hover,
        path[id="ecuador"]:hover, path[id="bolivia"]:hover, path[id="el salvador"]:hover, path[id="usa"]:hover, path[id="guatemala"]:hover,
        path[id="honduras"]:hover, path[id="mexico"]:hover, path[id="nicaragua"]:hover, path[id="panama"]:hover, path[id="paraguay"]:hover, 
        path[id="peru"]:hover, path[id="uruguay"]:hover, path[id="venezuela"]:hover{
            fill: #e25935;
            cursor: pointer;
        }

        path[id="argentina"], path[id="belize"], path[id="bolivia"], path[id="brazil"], path[id="chile"],
        path[id="colombia"], path[id="bolivia"], path[id="chile"], path[id="colombia"], path[id="cuba"],
        path[id="ecuador"], path[id="bolivia"], path[id="el salvador"], path[id="usa"], path[id="guatemala"],
        path[id="honduras"], path[id="mexico"], path[id="nicaragua"], path[id="panama"], path[id="paraguay"], 
        path[id="peru"], path[id="uruguay"], path[id="venezuela"]{
            fill: #eca28e;
        }

        path[id="${props => props.selectedCountry}"]{
            fill: #e25935;
        }
    }
`;

export default function Map({ country = "nonid", setCountry, countryData}){
    return (
        <MapContainer selectedCountry={country}>
            <VectorMap
                layerProps={{ 
                    fill: "#C0C0C0", 
                    onClick: ({target}) => { 
                        const countryId = target.attributes.id.value
                        if(countryData[countryId]){
                            setCountry(target.attributes.id.value)
                        }
                        return false;
                    }
                }}
                {...data} 
            />
        </MapContainer>
    )
}