import { Col, Row }            from "antd";
import React                   from "react";
import bussinessClassification from '../../data/businessClassification.json';
import states                  from '../../data/states.json';
import phonecc                 from '../../data/phoneCountryCodes.json';
import './form.css';

export default function Form() {
  const [formData, updateFormData] = React.useState({});
  
  const handleChange = (e) => {
    updateFormData({
      ...formData, [e.target.name]: e.target.value.trim()
    });
  };
  
  const handleform = (event) => {
    event.preventDefault();
    
    console.log(formData);
  }
  
  return (
    <>
      <form action="" onSubmit={handleform}>
        <div className="wrapper-form">
          <Row>
            <Col>
              <h1 className="fs-heading">Information</h1>
            </Col>
          </Row>
          
          <Row gutter={20} className="mb-1x">
            <Col span={6}>
              <div>
                <label htmlFor="identifier">Identifier</label>
              </div>
              <div>
                <input type="text" name="identifier" id="identifier" onChange={handleChange} />
              </div>
            </Col>
            
            <Col span={6}>
              <div>
                <label htmlFor="name">Name</label>
              </div>
              <div>
                <input type="text" name="name" id="name" onChange={handleChange} />
              </div>
            </Col>
            
            <Col span={8}>
              <div>
                <label htmlFor="display_name">Display Name</label>
              </div>
              <div>
                <input type="text" name="display_name" id="display_name" onChange={handleChange} />
              </div>
            </Col>
            
            <Col span={4}>
              <div>
                <label htmlFor="type">Type</label>
              </div>
              <div>
                <input type="text" name="type" id="type" onChange={handleChange} />
              </div>
            </Col>
          </Row>
          
          <Row gutter={20}  className="mb-1x">
            <Col span={6}>
              <div>
                <label htmlFor="bus_class">Business Classification</label>
              </div>
              <div>
                <select name="bus_class" id="bus_class" onChange={handleChange} >
                  {
                    bussinessClassification.map((business) => (
                      <option key={business.id} value={business.id}>{business.classification}</option>
                    ))
                  }
                </select>
              </div>
            </Col>
            
            <Col span={6}>
              <div>
                <label htmlFor="reg_num_abn">Registration Number (ABN)</label>
              </div>
              <div>
                <input type="number" name="reg_num_abn" id="reg_num_abn" onChange={handleChange} />
              </div>
            </Col>
            
            <Col span={4}>
              <div>
                <label htmlFor="reg_num_acn">Registration Number (ACN)</label>
              </div>
              <div>
                <input type="number" name="reg_num_acn" id="reg_num_acn" onChange={handleChange} />
              </div>
            </Col>
          </Row>
          
          <Row className="mb-1x">
            <Col span={24}>
              <div>
                <label htmlFor="bus_desc">Business Description</label>
              </div>
              <div>
                <input type="text" name="bus_desc" id="bus_desc" onChange={handleChange} />
              </div>
            </Col>
          </Row>
          
          <Row>
            <Col span={24}>
              <div>
                <label htmlFor="short_bus_desc">Short Business Description</label>
              </div>
              <div>
                <input type="text" name="short_bus_desc" id="short_bus_desc" onChange={handleChange} />
              </div>
            </Col>
          </Row>
          
          <Row>
            <Col>
              <h1 className="fs-heading">Address</h1>
            </Col>
          </Row>
          
          <Row className="mb-1x" gutter={20}>
            <Col span={14}>
              <div>
                <label htmlFor="address">Address</label>
              </div>
              <div>
                <input type="text" name="address" id="address" onChange={handleChange} />
              </div>
            </Col>
            
            <Col span={5}>
              <div>
                <label htmlFor="apt">Apartment, Suite, Building Name</label>
              </div>
              <div>
                <input type="text" name="apt" id="apt" onChange={handleChange} />
              </div>
            </Col>
            
            <Col span={5}>
              <div>
                <label htmlFor="suburb">Suburb</label>
              </div>
              <div>
                <input type="text" name="suburb" id="suburb" onChange={handleChange} />
              </div>
            </Col>
          </Row>
          
          <Row gutter={20}>
            <Col span={6}>
              <div>
                <label htmlFor="postal">Post Code</label>
              </div>
              <div>
                <input type="text" name="postal" id="postal" onChange={handleChange} />
              </div>
            </Col>
            
            <Col span={6}>
              <div>
                <label htmlFor="state">State</label>
              </div>
              <div>
                <select name="bus_class" id="bus_class" onChange={handleChange} >
                  {
                    states.map((state) => (
                      <option key={state.id} value={state.id}>{state.state}</option>
                    ))
                  }
                </select>
              </div>
            </Col>
            
            <Col span={6}>
              <div>
                <label htmlFor="country">Country</label>
              </div>
              <div>
                <input type="text" name="country" id="country" onChange={handleChange} />
              </div>
            </Col>
          </Row>
          
          <Row>
            <Col>
              <h1 className="fs-heading">Business Contact Information</h1>
            </Col>
          </Row>
          
          <Row className="mb-1x" gutter={20}>
            <Col span={7}>
              <div>
                <label htmlFor="landline">Landline</label>
              </div>
              <div>
                <div className="input-box prefix">
                  <select className="prefix" name="land_code" id="land_code" onChange={handleChange}>
                    {
                      phonecc.map((code) => (
                        <option key={code.id} value={code.id}>{code.country + ' (' + code.code + ')'}</option>
                      ))
                    }
                  </select>
                  <input type="number" name="landline" id="landline" placeholder="210 123 4567" onChange={handleChange} />
                </div>
              </div>
            </Col>
            
            <Col span={7}>
              <div>
                <label htmlFor="mobile">Mobile</label>
              </div>
              <div>
                <div className="input-box prefix">
                  <select className="prefix" name="phone_code" id="phone_code" onChange={handleChange}>
                    {
                      phonecc.map((code) => (
                        <option key={code.id} value={code.id}>{code.country + ' (' + code.code + ')'}</option>
                      ))
                    }
                  </select>
                  <input type="number" name="phone" id="phone" placeholder="210 123 4567" onChange={handleChange} />
                </div>
              </div>
            </Col>
            
            <Col span={10}>
              <div>
                <label htmlFor="website">Website</label>
              </div>
              <div>
                <input type="url" name="website" id="website" onChange={handleChange} />
              </div>
            </Col>
          </Row>
          
          <Row gutter={20} className="mb-3">
            <Col span={10}>
              <div>
                <label htmlFor="manager">Manager</label>
              </div>
              <div>
                <input type="text" name="manager" id="manager" onChange={handleChange} />
              </div>
            </Col>
            
            <Col span={10}>
              <div>
                <label htmlFor="email">Email</label>
              </div>
              <div>
                <input type="email" name="email" id="email" onChange={handleChange} />
              </div>
            </Col>
          </Row>
          
          <Row align={"middle"}>
            <Col span={24}>
              <button type="submit" className="btn-primary">Submit</button>
            </Col>
          </Row>
        </div>
      </form>
      
      
    </>
  )
}