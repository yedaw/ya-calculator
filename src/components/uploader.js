import React, { useEffect, useState } from 'react';
import '../styles/master.scss';
import '../styles/calculator.scss';
import { createWorker } from 'tesseract.js';

export const Uploader = (props) => {
    const [text, setText] = useState(undefined);
    const [selectedImage, setSelectedImage] = useState(null);
    const [notFound, setNotFound] = useState(undefined);
    const [attributeObj, setAttributeObj] = useState([]);
    const doOCR = () => {
        if (selectedImage !== null){

            (async () => {
                const worker = await createWorker('eng');
                const image = await worker.recognize(selectedImage);
                setText(image.data.text)

                await worker.terminate();
            })()
        }
    };
    let readText = () => {
        let attributeNames = ['Sprint Speed', 'Acceleration', 'Finishing', 'Att. Position', 'ShotPower', 'Long Shots', 'Penalties', 'Volleys', 'Vision', 'Crossing', 'FK Acc.', 'LongPass', 'ShortPass', 'Curve', 'Agility', 'Balance', 'Reactions', 'Composure', 'Ball Control', 'Dribbling', 'Interceptions', 'Heading Acc.', 'Def.Aware', 'Stand Tackle', 'Slide Tackle',  'Jumping', 'Stamina', 'Strength', 'Aggression']
        let attributeInputs = ['SprintSpeed', 'Acceleration', 'Finishing', 'Positioning', 'ShotPower', 'LongShots', 'Penalties', 'Volleys', 'Vision', 'Crossing', 'freeKick', 'longpassing', 'shortpassing', 'Curve', 'Agility', 'Balance', 'Reactions', 'Composure', 'ballcontrol', 'Dribbling', 'Interceptions', 'Heading', 'marking', 'standingTackle', 'Slidingtackle',  'Jumping', 'Stamina', 'Strength', 'Aggression']
        
        var notfound = []
        var object = []
        if ( text !== undefined ){
            attributeNames.forEach(attribute => {
                var attrValue = 0;
                if (text.indexOf(attribute) > -1){
                    var value = text.split(attribute)[1];
                    var value2 = value.split(' ');
                    var finalV = value2[1].slice(0, 2) 
                    if(!isNaN(finalV)){
                        attrValue = finalV
                    } else {
                        attrValue = 0
                    }
                } else {
                    notfound.push(attribute)
                    attrValue = 0
                }
                var attributeName = attributeInputs[attributeNames.indexOf(attribute)];
                var obj = { 'name' : attributeName, 'value' : attrValue };
                object.push(obj)
            })
            setNotFound('Image read. Couldn\'t find attributes for: ' + notfound)
        }
        setAttributeObj(object)
    }
    let updateInput = () => {
        for (var i = 0; i < attributeObj.length; i++){
            if( document.querySelector('#calculator input[name="' + attributeObj[i].name.toLowerCase() + '"]') ){
                document.querySelector('#calculator input[name="' + attributeObj[i].name.toLowerCase() + '"]').value = attributeObj[i].value
            }
        }
        props.updateStats();

    };
    useEffect(() => {
        if(selectedImage !== null){
            setNotFound('Loading...')
        }
        doOCR();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[selectedImage]);
    useEffect(() => {
        readText();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[text]);
    useEffect(() => {
        updateInput();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[attributeObj]);
    return(
        <div className="uploader">
            <input
            type="file"
            name="myImage"
            onChange={(event) => {
                let img = event.target.files[0];
                setSelectedImage(img);
            }}
        />
            <p>{notFound}</p>

        </div>
    )
}