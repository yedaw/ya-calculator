import React, { useEffect, useState } from 'react';
import '../styles/master.scss';
import '../styles/calculator.scss';
import { createWorker } from 'tesseract.js';

export const Uploader = (props) => {
    const [text, setText] = useState(undefined);
    const [selectedImage, setSelectedImage] = useState(null);
    const [notFound, setNotFound] = useState(undefined);
    let attributeObj = [];
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
        attributeObj = []

        if ( text !== undefined ){
            attributeNames.forEach(attribute => {
                var attrValue = 0;
                if (text.indexOf(attribute) > -1){
                    var value = text.split(attribute)[1];
                    var value2 = value.split(' ');
                    var finalV = value2[1].slice(0, 2) 
                    
                    attrValue = finalV

                    var attributeName = attributeInputs[attributeNames.indexOf(attribute)];

                    var obj = { 'name' : attributeName, 'value' : attrValue };
                    attributeObj.push(obj)
                } else {
                    notfound.push(attribute)
                    attrValue = 0
                }
            })
            setNotFound('Image read. Couldn\'t find attributes for: ' + notfound)
        }
    }
    let updateInput = () => {
        console.log(attributeObj)
        for (var i = 0; i < attributeObj.length; i++){
            if( document.querySelector('#calculator input[name="' + attributeObj[i].name.toLowerCase() + '"]') ){
                document.querySelector('#calculator input[name="' + attributeObj[i].name.toLowerCase() + '"]').value = attributeObj[i].value
            } else (
                console.log('Couldn\'t find input named ' + attributeObj[i].name )
            )
        }
        props.updateStats();

    }
    useEffect(() => {
        doOCR();
        readText();
        updateInput();
    });
    return(
        <div className="uploader">
            <input
            type="file"
            name="myImage"
            onChange={(event) => {
                console.log(event.target.files[0]);
                let img = event.target.files[0];
                setSelectedImage(img);
            }}
        />
            <p>{notFound}</p>

        </div>
    )
}