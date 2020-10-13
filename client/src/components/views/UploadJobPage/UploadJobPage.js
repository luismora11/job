import React, { useState } from 'react';
import {Typography, Button, Form, message, Input, Icon} from 'antd';
import Axios from 'axios';

const {Title} = Typography;
const {TextArea} = Input;



const Categories = [
    {key:1, value: "Software Developer"},
    {key:2, value: "Database Administrator"},
    {key:3, value: "Web Developer"},
    {key:4, value: "Information Security Analyst"}

]







function UploadJobPage(props) {

    
    const [TitleValue, setTitleValue] = useState("")
    const [DescriptionValue, setDescriptionValue] = useState("")
    const [CategoriesValue, setCategoriesValue] = useState(1)


    const onTitleChange = (event) => {
        setTitleValue(event.currentTarget.value)
    }


    const onDescriptionChange = (event) =>{
        setDescriptionValue(event.currentTarget.value)
    }

    const onCategoriesChange = (event) =>{
        setCategoriesValue(event.currentTarge.value)
    }


    const onSubmit = (event) =>{
        event.preventDefault();


        if (!TitleValue || !DescriptionValue || 
            !CategoriesValue ) {
            return alert('fill all the fields first!')
        }





        const variables = {
            
           // writer: props.user.userData._id,
            title: TitleValue,
            description: DescriptionValue,
            categories: CategoriesValue,
           
        }

        Axios.post('/api/product/uploadJob', variables)
        .then(response =>{
            if(response.data.success){
                alert("Job Posted")
                window.location = '/';
                

            }else{
                alert('failed to upload product')
            }
        })


    }



    return (
        <div style={{maxWidth:'700px', margin:'2rem auto'}}>
          <div style={{textAlign:'center', marginBottom:'2rem'}}>
              <Title level={2}>
              Post New Job
              </Title>
          </div>


          <Form onSubmit={onSubmit}> 


          <br />
          <br />
          <label>Job Title</label>
          <Input
            onChange={onTitleChange}
            value={TitleValue}
          />

          <br />
          <br />
          <label>Description</label>
          <TextArea
          onChange={onDescriptionChange}
          value={DescriptionValue}
          />

          <br />
          <br />
          <label>Job Categories</label>
          <select onChange={onCategoriesChange}>
          {Categories.map(item =>(

              <option key={item.key} value={item.key}>{item.value}</option>

          ))}
          </select>

          <br />
          <br />
          <Button onClick={onSubmit}>Post Job</Button>






          </Form>





        </div>
    )
}

export default UploadJobPage
