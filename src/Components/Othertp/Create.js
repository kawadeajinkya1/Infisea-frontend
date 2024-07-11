import { useState } from "react";
//import Footer from "../../Footer/Footer";
//import Navbar from "../../Navbar/Navbar";
import classes from "./Create.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';
import Select from 'react-select';


function Create() {
    const [cookies, setCookie, removeCookie] = useCookies(['batli']);
    const [reraMatched, setReraMatched] = useState(false);
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [locality, setLocality] = useState("");
    const [rera, setRera] = useState("");
    const [bhk, setBhk] = useState([]);
    const [min_sqft, setMin_sqft] = useState("");
    const [max_sqft, setMax_sqft] = useState("");
    const [min_price, setMin_price] = useState("");
    const [max_price, setMax_price] = useState("");
    const [address, setAddress] = useState("");
    const [file1, setFile1] = useState("");
    const [cover, setCover] = useState([]);
    const [units, setUnits] = useState("");
    const [acres, setAcres] = useState("");

    const [property_type, setProperty_type] = useState([]);
    const [possesion, setPossession] = useState();

    const [overview, setOverview] = useState("");
    const [brochure, setBrochure] = useState("");
    const [plays, setPlays] = useState([]);
    const [safe, setSafe] = useState([]);
    const [paint, setPaint] = useState("");
    const [floor, setFloor] = useState("");
    const [floor2, setFloor2] = useState("");
    const [wall, setWall] = useState("");
    const [floor3, setFloor3] = useState("");
    const [bath, setBath] = useState([]);
    const [structure, setStructure] = useState("");
    const [video, setVideo] = useState("");
    const [text, setText] = useState(0);
    const [text2, setText2] = useState(0);
    //////form state////////////
    let [step, setStep] = useState(1);

    // const [two, setTwo] = useState(false);
    //const [three, setThree] = useState(false);
    const [formFields, setFormFields] = useState([
        { units: '', area: '', price: '', image: '' }
    ]);
    ////////
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [selectedPropOptions, setSelectedPropOptions] = useState([]);
    const [selectedSportOptions, setSelectedSportOptions] = useState([]);
    const [selectedSafetyOptions, setSelectedSafetyOptions] = useState([]);
    const [selectedBathOptions, setSelectedBathOptions] = useState([]);

    const textareaHnd = (object) => {
        setText(object.target.value.length)
        if (object.target.value.length > object.target.maxLength) {
            object.target.value = object.target.value.slice(0, object.target.maxLength)
        }
    }

    const textareaHnd2 = (object) => {
        setText2(object.target.value.length)
        if (object.target.value.length > object.target.maxLength) {
            object.target.value = object.target.value.slice(0, object.target.maxLength)
        }
    }

    const maxLengthCheck = (object) => {
        if (object.target.value.length > object.target.maxLength) {
            object.target.value = object.target.value.slice(0, object.target.maxLength)
        }

        if (object.target.value < object.target.min) {
            object.target.value = null
        }
    }

    const setname = (e) => {
        setName(e.target.value)
    };
    const setcity = (e) => {
        setCity(e.target.value)
    };
    const setlocality = (e) => {
        setLocality(e.target.value)
    };
    const setrera = (e) => {
        const newInputValue = e.target.value;

        // Check if the input matches the desired pattern
        if (e.target.value.length == 12) {
            if (/^[A-Z]\d{11}$/.test(newInputValue)) {
                setRera(newInputValue);
                setReraMatched(true);
            } else {
                alert('Invalid rera number ');
            }
        }
        setRera(e.target.value)
    };
    const setbhk = (e) => {
        const value = e.target.value;
        const checked = e.target.checked;
        console.log(value, checked)
        if (checked) {
            setBhk([...bhk, value])
        } else {
            setBhk(bhk.filter((e) => (e !== value)))
        }
    };
    const setmin_sqft = (e) => {
        setMin_sqft(e.target.value)
    };
    const setmax_sqft = (e) => {
        setMax_sqft(e.target.value)
    };
    const setmin_price = (e) => {
        setMin_price(e.target.value)
    };
    const setmax_price = (e) => {
        setMax_price(e.target.value)
    };
    const setaddress = (e) => {
        setAddress(e.target.value)
    };
    const setimgfile = (e) => {
        setFile1(e.target.files[0])
    };
    const setcoverimg = (e) => {
        setCover(e.target.files)
    };
    const setunits = (e) => {
        setUnits(e.target.value)
    };
    const setacres = (e) => {
        setAcres(e.target.value)
    };

    const setproperty_type = (e) => {
        const value = e.target.value;
        const checked = e.target.checked;
        console.log(value, checked);
        if (checked) {
            setProperty_type([...property_type, value])
        } else {
            setProperty_type(property_type.filter((e) => (e !== value)))
        }
    };
    const setPossession3 = () => {
        setPossession('Ready To Move')
    };
    const setPossession2 = () => {
        setPossession('Under Construction')
    }
    const setoverview = (e) => {
        setOverview(e.target.value)
    };
    const setbrochure = (e) => {
        setBrochure(e.target.files)
    };
    const setsport = (e) => {
        const value = e.target.value;
        const checked = e.target.checked;
        console.log(value, checked);
        if (checked) {
            setPlays([...plays, value])
        } else {
            setPlays(plays.filter((e) => (e !== value)))
        }
    };
    const setsafe = (e) => {
        const value = e.target.value;
        const checked = e.target.checked;
        console.log(value, checked)
        if (checked) {
            setSafe([...safe, value])
        } else {
            setSafe(safe.filter((e) => (e !== value)))
        }
    };
    const setpaint = (e) => {
        setPaint(e.target.value)
    };
    const setfloor = (e) => {
        setFloor(e.target.value)
    };
    const setfloor2 = (e) => {
        setFloor2(e.target.value)
    };
    const setwall = (e) => {
        setWall(e.target.value)
    };
    const setfloor3 = (e) => {
        setFloor3(e.target.value)
    };
    const setbath = (e) => {
        const value = e.target.value;
        const checked = e.target.checked;
        if (checked) {
            setBath([...bath, value])
        } else {
            setBath(bath.filter((e) => (e !== value)))
        }
    };
    const setstructure = (e) => {
        setStructure(e.target.value)
    };
    const setvideo = (e) => {
        setVideo(e.target.files[0])
    };

    ////////////////////////new///////////////////////
    const options = [
        { value: '1BHK', label: '1BHK' },
        { value: '2Bhk', label: '2Bhk' },
        { value: '3Bhk', label: '3Bhk' },
        { value: '4Bhk', label: '4Bhk' },
        { value: '5Bhk', label: '5Bhk' },
        { value: '6Bhk', label: '6Bhk' },
        { value: 'Bunglow', label: 'Bunglow' },
        { value: 'Shop', label: 'Shop' },

        // Add more options as needed
    ];

    const propOptions = [
        { value: 'Residential', label: 'Residential' },
        { value: 'Commercial', label: 'Commercial' },
        { value: 'Land & Plotting', label: 'Land & Plotting' },
        // Add more options as needed
    ];

    const sportOptions = [
        { value: 'Gymnasium', label: 'Gymnasium' },
        { value: 'Kids Play Area', label: 'Kids Play Area' },
        { value: 'Jogging / Cycle Track', label: 'Jogging / Cycle Track' },
        { value: 'Swimming Pool', label: 'Swimming Pool' },
        { value: 'Badminton Court(s)', label: 'Badminton Court(s)' },
        { value: 'Cricket', label: 'Cricket' },
        { value: 'Basketball', label: 'Basketball' },
        { value: 'Yoga Areas', label: 'Yoga Areas' },
        { value: 'Snooker/Pool/Billiards', label: 'Snooker/Pool/Billiards' },
        { value: 'Rappelling/Rock Climbing', label: 'Rappelling/Rock Climbing' },
        { value: 'Skating Rink', label: 'Skating Rink' },
        { value: 'Gazebo', label: 'Gazebo' },
        { value: 'Volleyball', label: 'Volleyball' },
        { value: 'Golf Putting', label: 'Golf Putting' },

        // Add more options as needed
    ];

    const safetyOptions = [
        { value: '24 x 7 Security', label: '24 x 7 Security' },
        { value: 'CCTV / Video Surveillance', label: 'CCTV / Video Surveillance' },
        { value: 'Fire Fighting Systems', label: 'Fire Fighting Systems' },
        { value: 'Intercom Facility', label: 'Intercom Facility' },
        { value: 'Video Phone', label: 'Video Phone' },
        { value: 'Power Backup', label: 'Power Backup' },
        // Add more options as needed
    ];

    const bathOptions = [
        { value: 'Geyser', label: 'Geyser' },
        { value: 'Exhaust Fan', label: 'Exhaust Fan' },
        { value: 'Premium Bath Fittings', label: 'Premium Bath Fittings' },

        // Add more options as needed
    ];

    const handleSelectChange = (selectedValues) => {
        setSelectedOptions(selectedValues);
        console.log(selectedOptions)
    };

    const handleSelectPropChange = (selectedValues2) => {
        setSelectedPropOptions(selectedValues2);
    };

    const handleSelectSportChange = (selectedValues3) => {
        setSelectedSportOptions(selectedValues3);
    };

    const handleSelectSafetyChange = (selectedValues4) => {
        setSelectedSafetyOptions(selectedValues4);
    };

    const handleSelectBathChange = (selectedValues5) => {
        setSelectedBathOptions(selectedValues5);
    };

    const backHnd = () => {
        setStep(step = step - 1)
        console.log(step)
    }

    const nextHnd = () => {
        setStep(step = step + 1)
        console.log(step)

    }




    const navigate = useNavigate();
    const addUserData = (e) => {
        e.preventDefault();


        const formdata = new FormData();

        formdata.append("name", name)
        formdata.append("city", city)
        formdata.append("locality", locality)
        formdata.append("rera", rera)
        formdata.append("bhk", bhk)
        formdata.append("min_sqft", min_sqft)
        formdata.append("max_sqft", max_sqft)
        formdata.append("min_price", min_price)
        formdata.append("max_price", max_price)
        formdata.append("address", address)
        formdata.append("photo", file1)
        for (let i = 0; i < cover.length; i++) {
            formdata.append('cover', cover[i]);
        }
        formdata.append("units", units)
        formdata.append("acres", acres)

        formdata.append("property_type", property_type)
        formdata.append("possesion", possesion)
        formdata.append("overview", overview)
        for (let i = 0; i < brochure.length; i++) {
            formdata.append('brochure', brochure[i]);
        }
        formdata.append("plays", plays)
        formdata.append("safe", safe)
        formdata.append("paint", paint)
        formdata.append("floor", floor)
        formdata.append("floor2", floor2)
        formdata.append("wall", wall)
        formdata.append("floor3", floor3)
        formdata.append("bath", bath)
        formdata.append("structure", structure)
        formdata.append("video", video)
        /////////////////////////////////////
        const bhk5 = selectedOptions.map(item => item.value)
        //console.log(selectedPropOptions)
        formdata.append('selectedOptions', bhk5);

        const prop5 = selectedPropOptions.map(item => item.value)
        //console.log(prop5)
        formdata.append('selectedPropOptions', prop5);

        const safety5 = selectedSafetyOptions.map(item => item.value)
        console.log(safety5)
        formdata.append('selectedSafetyOptions', safety5);

        const sport5 = selectedSportOptions.map(item => item.value)
        //console.log(sport5)
        formdata.append('selectedSportOptions', sport5);

        const bath5 = selectedBathOptions.map(item => item.value)
        //console.log(bath5)
        formdata.append('selectedBathOptions', bath5);

        //////page////////



        ///////page///////////



        setCookie('Rera', rera)
        pageFun()
        axios.post("http://localhost:8800/builder", formdata)

            .then(res => console.log(res.data))


        // navigate("/page")
        //.catch(err => console.log(err))
    };

    ////////////////page/////////////////
    const pageFun = async () => {
        const id = cookies.Rera;
        console.log(id)
        try {
            console.log('page')
            const formDataArray = formFields.map((field) => {
                const formData2 = new FormData();
                formData2.append('units', field.units);
                formData2.append('area', field.area);
                formData2.append('price', field.price);
                formData2.append('image', field.image);
                formData2.append('id', id);

                return formData2;
            });

            // Use Promise.all to send multiple requests simultaneously
            await Promise.all(
                formDataArray.map((formData2) =>
                    axios.post('http://localhost:8800/builderbhk', formData2)
                )
            );
            removeCookie('Rera', cookies.Rera)
            alert('property posted successfully!')
            //navigate("/dashboard")
            //console.log('Responses:', responses);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const handleChange = (index, field, value) => {
        const updatedFields = [...formFields];
        updatedFields[index][field] = value;
        setFormFields(updatedFields);
    };

    const handleImageChange = (index, image) => {
        const updatedFields = [...formFields];
        updatedFields[index].image = image;
        setFormFields(updatedFields);
    };

    const handleAddRow = () => {
        setFormFields([...formFields, { units: '', area: '', price: '', image: '' }]);
    };

    const handleRemoveRow = (index) => {
        const updatedFields = [...formFields];
        updatedFields.splice(index, 1);
        setFormFields(updatedFields);
    };
    return (
        <>

            <div className={classes.formHold}>
                <h3 className={classes.head}>Fill the Form to Create New Property :</h3>
                <form className={classes.container} onSubmit={addUserData}>


                    {step === 1 ? <div className={classes.stepDiv}>
                        <div className={classes.stepLeft}>
                            <label className={classes.lbl}>Project Name : </label><br></br>
                            <input type="text" name="name" value={name} onChange={setname} maxLength='40' placeholder="Enter Your Project's Name" /><br></br>
                            <label>City: </label><br></br>
                            <input type="text" name="city" value={city} onChange={setcity} maxLength='20' placeholder="City" /><br></br>
                            <label>Locality: </label><br></br>
                            <input type="text" name="locality" value={locality} onChange={setlocality} maxLength='20'placeholder="Locality"  /><br></br>
                            <label>Regulatory Information :</label><br></br>
                            <input value={rera} placeholder="Enter Project RERA Reg." name="rera" onChange={setrera} maxLength='12' />

                            <div>
                                <label>Select BHK :</label>
<br></br>
                                <div>
                                    <Select
                                        options={options}
                                        isMulti
                                        onChange={handleSelectChange}
                                        value={selectedOptions}
                                        placeholder='Select Unit Type'
                                    />
                                </div>
                            </div>
                            <br/>
                            <label>Area (in sqft from minimumn to maximum): </label> <div><input type="number" min='1' maxLength="9" onInput={maxLengthCheck} value={min_sqft} name="min_sqft" onChange={setmin_sqft} placeholder="Enter Min SqFt" /> to <input type="number" placeholder="Enter Max SqFt" min='1' maxLength="9" onInput={maxLengthCheck} name="max_sqft" value={max_sqft} onChange={setmax_sqft} /></div>
                        </div>

                        <div className={classes.stepRight}>


                            <label>Price (in rupees from minimumn to maximum): </label><div><input type="number" min='1' maxLength="9" onInput={maxLengthCheck} value={min_price} name="min_price" onChange={setmin_price} placeholder="Enter Min Price" /> to <input type="number" name="max_price" min='1' maxLength="9" onInput={maxLengthCheck} value={max_price} onChange={setmax_price} placeholder="Enter Max Price" /></div>
                            <label>Detailed Address:  <span className={classes.txtL}>{text}/250</span></label><br></br>
                            <textarea type="text" name="address" value={address} onChange={setaddress} onInput={textareaHnd} maxLength="250" placeholder="Enter Your Address"/>

                            <label>Thumbnail Image: </label><br></br>
                            <input type="file" accept="image/*" name="photo" onChange={setimgfile}  placeholder="Import Image you want as Thumbnail"/><br></br>

                            <label>Cover Image: </label><br></br>
                            <input type="file" accept="image/*" multiple name="cover" onChange={setcoverimg}  placeholder="Import Image you want as Cover Image"/>
<br></br>
                            <lable><b>Project Size :</b></lable><div><input type="number" min='1' maxLength="9" onInput={maxLengthCheck} placeholder="Enter Total Units" name="units" value={units} onChange={setunits} /> : <input type="number" value={acres} min='1' maxLength="9" onInput={maxLengthCheck} placeholder="Enter Total Acres" name="acres" onChange={setacres} /></div>
                        </div>



                    </div> : ''}  {/*step 1 end */}


                    {step == 2 ? <div className={classes.stepDiv}>

                        <div className={classes.stepLeft}>




                            <label>Property Type: </label>

                            <div>
                                <Select
                                    options={propOptions}
                                    isMulti
                                    onChange={handleSelectPropChange}
                                    value={selectedPropOptions}
                                    placeholder='Select Property Type'
                                />
                            </div>

                            <label>Possession Status:</label>
                            <div className={classes.row}>
                                <button type="button" name="possesion" onClick={setPossession2} className={`${possesion === 'Under Construction' ? classes.firstClass : classes.secondClass}`}>Under Construction</button>
                                <button type="button" name="possesion" onClick={setPossession3} className={`${possesion === 'Ready To Move' ? classes.firstClass : classes.secondClass}`}>Ready To Move</button>
                            </div>

                            <h3>Project Details :</h3>
                            <div className={classes.underline}></div>


                            <p>Write Overview:  <span className={classes.txtL}>{text2}/250</span> </p><textarea type="text" name="overview" value={overview} onInput={textareaHnd2} maxLength="250" onChange={setoverview} />
                            <div><p>Brochure :</p><input type="file" multiple name="brochure" onChange={setbrochure} /></div>

                            <h3>Amenities :</h3>
                            <label>Sports :</label>
                            <div>
                                <Select
                                    options={sportOptions}
                                    isMulti
                                    onChange={handleSelectSportChange}
                                    value={selectedSportOptions}
                                    placeholder='Sports Facilities'
                                />
                            </div>

                            <label>Bathroom :</label><br></br>

                            <div>
                                <Select
                                    options={bathOptions}
                                    isMulti
                                    onChange={handleSelectBathChange}
                                    value={selectedBathOptions}
                                    placeholder='Select Bathroom Facilities'
                                />
                            </div>
                        </div>

                        <div className={classes.stepRight}>


                            <label>Safety :</label>


                            <div>
                                <Select
                                    options={safetyOptions}
                                    isMulti
                                    onChange={handleSelectSafetyChange}
                                    value={selectedSafetyOptions}
                                    placeholder='Safety Facilities'
                                />
                            </div>

                            <h3>Specifications :</h3>
                            <label>Master Bedroom-Walls :</label><br/>
                            <select name="paint" onChange={setpaint}>
                                <option></option>
                                <option>Oil Bound Distemper</option>
                                <option>option 2</option>
                                <option>option 3</option>
                            </select><br></br>
                            <label>Master Bedroom-Flooring :</label><br/>
                            <select name="floor" onChange={setfloor}>
                                <option></option>
                                <option>Vitrified Tiles</option>
                                <option>option 2</option>
                                <option>option 3</option>
                            </select><br></br>
                            <label>Other Bedrooms-Flooring :</label><br/>
                            <select name="floor2" onChange={setfloor2}>
                                <option></option>
                                <option>Vitrified Tiles</option>
                                <option>option 2</option>
                                <option>option 3</option>
                            </select><br></br>
                            <label>Walls :</label><br></br>
                            <select name="wall" onChange={setwall}>
                                <option></option>
                                <option>Oil Bound Distemper</option>
                                <option>option 2</option>
                                <option>option 3</option>
                            </select><br></br>
                            <label>Living Area-Flooring :</label><br/>
                            <select name="floor3" onChange={setfloor3}>
                                <option></option>
                                <option>Vitrified Tiles</option>
                                <option>option 2</option>
                                <option>option 3</option>
                            </select><br></br>


                            <label>Structure :</label><br/>
                            <select name="structure" onChange={setstructure}>
                                <option></option>
                                <option>RCC Frame Structure</option>
                                <option>option 2</option>
                                <option>option 3</option>

                            </select>


 <div><p>Video :</p><input type="file" accept="video/*" name="video" onChange={setvideo} /></div>
                           

                        </div>



                    </div> : ''}  {/*step 2 end */}

                    {step == 3 ? <div className={classes.stepDiv}>
                       

                            <div>
                                <div className={classes.hold}>
                                    {formFields.map((field, index) => (
                                        <div key={index}>
                                            <label>
                                                Units: <br/>
                                                <input
                                                    placeholder="Enter Units"
                                                    type="text"
                                                    value={field.units}
                                                    onChange={(e) => handleChange(index, 'units', e.target.value)}
                                                />
                                            </label>
                                            <label>
                                                Area: <br/>
                                                <input
                                                 placeholder="Enter Area"
                                                    type="text"
                                                    value={field.area}
                                                    onChange={(e) => handleChange(index, 'area', e.target.value)}
                                                />
                                            </label>
                                            <label>
                                                Price:<br/>
                                                <input
                                                 placeholder="Enter Price"
                                                    type="text"
                                                    value={field.price}
                                                    onChange={(e) => handleChange(index, 'price', e.target.value)}
                                                />
                                            </label><br></br>
                                            <label>
                                                Image:
                                                <input
                                                    type="file"
                                                    onChange={(e) => handleImageChange(index, e.target.files[0])}
                                                />
                                            </label>
                                          <center> <div className={classes.btndd}> <button type="button" className={classes.btn} onClick={() => handleRemoveRow(index)}>Remove</button> &emsp;  <button type="button" className={classes.btn}  onClick={handleAddRow} >Add Unit</button><br></br> </div> </center> 
                                          <br></br>
                                        </div>
                                    ))}
                                   
                                     <center>
                                <button type="submit" className={classes.btn}  >Submit & Next</button>
                            </center>
                            
                                </div>
                                {/*<button onClick={handleSubmit} className={classes.sbt}>Submit</button>*/}
                            </div>
                        

                    </div> : ''} {/*step 3 end */}

                 

                </form>
            </div>

            <div className={classes.stepHold}>{step > 1 ? <button onClick={backHnd} className={classes.btnStep}>Back</button> : ''} {step < 4 ? <button onClick={nextHnd} className={classes.btnStep}>Next</button> : ''}
            </div>


        </>
    );
};
export default Create;