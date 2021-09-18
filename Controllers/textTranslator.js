const textTranslate = require("translate-google");

const translations = require("../Models/textTranslator");
const sequelizer = require("../dbconnection");


exports.TranslateInputText = (req, res) => {
    const {fromLang, ToLang, inputText} = req.body;

    sequelizer.query('CALL TranslateInputText(:fromLanguage, :toLanguage, :textInput )',
    {replacements: {fromLanguage : fromLang, toLanguage: ToLang, textInput: inputText}})
    .then(data=>{
        console.log("Data : ", data);
        if(data && data.length > 0 ){
            res.status(200).json({message : "Translated output text fetched successfully from Database", 
            translatedText : data[0].translatedText });
        }else{
            //use translation API
            textTranslate(inputText, {fromLang : fromLang, ToLang: ToLang}).then((response=>{
                sequelizer.query('CALL addTranslatedResponse(:fromLanguage, :toLanguage, :textInput, :translatedText )',
                {replacements: {fromLanguage : fromLang, toLanguage: ToLang, textInput: inputText, translatedText: response}})
                .then((data)=>{
                    res.status(200).json({message : "Translated output text fetched successfully from 3rd party translator",
                    translatedText: response})

                })
                .catch((err)=>{
                    console.log("Error : ", err);
                })
            }))
        }
    })
    .catch((err)=>{
        res.status(500).json({message : err.message || " Error occured"});
    });


}
