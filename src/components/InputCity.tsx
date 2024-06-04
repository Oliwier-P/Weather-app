import { useState } from "react";
import { City } from "../Types";
import cities from "../cities.json";
import { Autocomplete, TextField, Box } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

const citiesNames = cities as City[];

interface InputCityProps {
  handleSelectedCity: (latitude: string, longitude: string) => void;
}

export default function InputCity({ handleSelectedCity }: InputCityProps) {
  const [inputValue, setInputValue] = useState("");
  const [open, setOpen] = useState(false);

  const handleInputChange = (event: any, newInputValue: string) => {
    setInputValue(newInputValue);
    if (newInputValue) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  const handleChange = (event: any, newValue?: City | null) => {
    if (newValue != undefined) {
      handleSelectedCity(newValue.lat, newValue.lng);
    }
  };

  const filterOptions = (options: City[], state: any) => {
    const filtered = options.filter((option) => option.name.toLowerCase().includes(state.inputValue.toLowerCase()));
    return filtered.slice(0, 15);
  };

  return (
    <>
      {/* <input className="input-city" placeholder="Search for cities" onChange={(e) => searchCity(e.target.value)} /> */}
      <Autocomplete
        className="input-city"
        autoHighlight
        open={open}
        onOpen={() => inputValue && setOpen(true)}
        onClose={() => setOpen(false)}
        onChange={handleChange}
        id="city-autocomplete"
        options={citiesNames}
        filterOptions={filterOptions}
        getOptionLabel={(option) => option.name}
        onInputChange={handleInputChange}
        renderOption={(props, option) => {
          return (
            <Box component="li" {...props} key={`${option.name}-${option.country}-${uuidv4()}`}>
              {option.name} ({option.country})
            </Box>
          );
        }}
        renderInput={(params) => <TextField {...params} label="City" />}
      />
    </>
  );
}
