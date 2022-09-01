import React, { useState } from "react";

import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
} from "react-hook-form";
import {
  TextField,
  Typography,
  Button,
  Stepper,
  Step,
  StepLabel,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  Radio,
} from "@mui/material";

function getSteps() {
  return [
    "Overview",
    "Leadership Team",
    "Academics",
    "Infrastructure",
    "Distribution",
    "Activities & Events",
    "Facilities",
    "Test Preparations",
    "Teachers & Staff",
    "Admission & Fees",
    "Policy",
    "Gallery",
    "Contact",
    "Reviews & Ratings",
    "Downloads",
    "Specialities",
  ];
}
const OverViewForm = () => {
  const { control } = useFormContext();
  return (
    <>
      <h2>Overview</h2>
      <Controller
        control={control}
        name="School-name"
        render={({ field }) => (
          <TextField
            id="School-name"
            label="School name"
            variant="outlined"
            placeholder="Enter Your School Name"
            fullWidth
            required
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="Address"
        render={({ field }) => (
          <TextField
            id="Address"
            label="Address"
            variant="outlined"
            placeholder="Enter Your Address"
            required
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <div className="flex">
        <Controller
          control={control}
          name="State"
          render={({ field }) => (
            <TextField
              id="State"
              label="State"
              variant="outlined"
              required
              placeholder="Enter Your State"
              margin="normal"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="District"
          render={({ field }) => (
            <TextField
              id="District"
              label="District"
              variant="outlined"
              required
              placeholder="Enter Your District"
              margin="normal"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="City"
          render={({ field }) => (
            <TextField
              id="City"
              label="City"
              variant="outlined"
              required
              placeholder="Enter Your City"
              margin="normal"
              {...field}
            />
          )}
        />
      </div>
      <Controller
        control={control}
        name="Pincode"
        render={({ field }) => (
          <TextField
            id="Pincode"
            label="Pincode"
            variant="outlined"
            required
            placeholder="Enter Your Pincode"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="Contact-Number"
        render={({ field }) => (
          <TextField
            id="contact-number"
            label="Contact Number"
            variant="outlined"
            placeholder="Enter Your Contact Number"
            required
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="alternate-contact-number"
        render={({ field }) => (
          <TextField
            id="alternate-contact-number"
            label="Alternate Contact Number"
            variant="outlined"
            placeholder="Enter Your Alternate Contact Number"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="Email address"
        render={({ field }) => (
          <TextField
            id="Email address"
            label="Email address"
            variant="outlined"
            required
            placeholder="Enter Your Email address"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="Website"
        render={({ field }) => (
          <TextField
            id="Website"
            label="Website"
            variant="outlined"
            placeholder="Enter Your Website"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <div className="flex">
        <FormLabel id="demo-radio-buttons-group-label">
          Registered with SchoolAdmission.biz.in
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue=""
          name="radio-buttons-group"
          row
        >
          <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="No" control={<Radio />} label="No" />
        </RadioGroup>
      </div>
      <div className="flex">
        <FormLabel id="demo-radio-buttons-group-label">
          Other branches
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue=""
          name="radio-buttons-group"
          row
        >
          <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="No" control={<Radio />} label="No" />
        </RadioGroup>
      </div>
      <div className="flex">
        <FormLabel id="demo-radio-buttons-group-label">
          Google map location:
        </FormLabel>
        <Controller
          control={control}
          name="Latitude"
          render={({ field }) => (
            <TextField
              id="Latitude"
              label="Latitude"
              variant="outlined"
              placeholder="Latitude"
              margin="normal"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="Longitude"
          render={({ field }) => (
            <TextField
              id="Longitude"
              label="Longitude"
              variant="outlined"
              placeholder="Longitude"
              margin="normal"
              {...field}
            />
          )}
        />
      </div>
    </>
  );
};
const AboutForm = () => {
  const { control } = useFormContext();
  return (
    <>
      <h2>About</h2>
      <Controller
        control={control}
        name="Name of the managing body"
        render={({ field }) => (
          <TextField
            id="Name of the managing body"
            label="Name of the managing body"
            variant="outlined"
            placeholder="Enter Name of the managing body"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <div className="flex">
        <FormLabel id="demo-radio-buttons-group-label">Ownership</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue=""
          name="radio-buttons-group"
          row
        >
          <FormControlLabel
            value="Private unaided"
            control={<Radio />}
            label="Private unaided"
          />
          <FormControlLabel
            value="Private government aided"
            control={<Radio />}
            label="Private government aided"
          />
          <FormControlLabel
            value=" Kendriya Vidyalaya Sangathan"
            control={<Radio />}
            label=" Kendriya Vidyalaya Sangathan"
          />
          <FormControlLabel
            value="Jawahar Navodaya Vidyalaya"
            control={<Radio />}
            label="Jawahar Navodaya Vidyalaya"
          />
          <FormControlLabel
            value="Central Government"
            control={<Radio />}
            label="Central Government"
          />
          <FormControlLabel
            value=" State Government"
            control={<Radio />}
            label=" State Government"
          />
          <FormControlLabel
            value="Military school"
            control={<Radio />}
            label="Military school"
          />
          <FormControlLabel
            value="Sainik School"
            control={<Radio />}
            label="Sainik School"
          />
          <FormControlLabel
            value="Railway school "
            control={<Radio />}
            label="Railway school "
          />
        </RadioGroup>
      </div>
      <Controller
        control={control}
        name="Established in"
        render={({ field }) => (
          <TextField
            id="Established in "
            label="Established in (year)"
            variant="outlined"
            placeholder="Enter Your Established (year)"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />

      <div className="flex">
        <FormLabel id="demo-radio-buttons-group-label">
          Special affiliations
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue=""
          name="radio-buttons-group"
          row
        >
          <FormControlLabel
            value="Arya Samaj affiliation (DAV)"
            control={<Radio />}
            label="Arya Samaj affiliation (DAV)"
          />
          <FormControlLabel
            value="Delhi Public School Society"
            control={<Radio />}
            label="Delhi Public School Society"
          />
          <FormControlLabel
            value="Bhartiya Vidya Bhawan affiliation"
            control={<Radio />}
            label="Bhartiya Vidya Bhawan affiliation"
          />
          <FormControlLabel
            value="Vidya Bharti schools"
            control={<Radio />}
            label="Vidya Bharti schools"
          />
          <FormControlLabel
            value="Apeejay schools"
            control={<Radio />}
            label="Apeejay schools"
          />
          <FormControlLabel
            value="Chinmaya Mission schools "
            control={<Radio />}
            label="Chinmaya Mission schools "
          />
          <FormControlLabel
            value="Ramkrishna Mission schools"
            control={<Radio />}
            label="Ramkrishna Mission schools"
          />
          <FormControlLabel
            value="Vivekanand Kendra schools"
            control={<Radio />}
            label="Vivekanand Kendra schools"
          />
          <FormControlLabel
            value="Independent"
            control={<Radio />}
            label="Independent"
          />
        </RadioGroup>
      </div>
      <Controller
        control={control}
        name="Boarding"
        render={({ field }) => (
          <TextField
            id="Boarding"
            label="Boarding"
            variant="outlined"
            placeholder="Enter Your Boarding Type"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <div className="flex">
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue=""
          name="radio-buttons-group"
          row
        >
          <FormControlLabel value="Co-ed" control={<Radio />} label="Co-ed" />
          <FormControlLabel
            value="Boys school"
            control={<Radio />}
            label="Boys school"
          />
          <FormControlLabel
            value=" Girls School "
            control={<Radio />}
            label=" Girls School "
          />
        </RadioGroup>
      </div>
      <div className="flex">
        <FormLabel id="demo-radio-buttons-group-label">Managed By</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue=""
          name="radio-buttons-group"
          row
        >
          <FormControlLabel value="Trust" control={<Radio />} label="Trust" />
          <FormControlLabel
            value="Society/ Samiti"
            control={<Radio />}
            label="Society/ Samiti"
          />
        </RadioGroup>
      </div>
    </>
  );
};
const PersonalForm = () => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="address1"
        render={({ field }) => (
          <TextField
            id="address1"
            label="Address 1"
            variant="outlined"
            placeholder="Enter Your Address 1"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="address2"
        render={({ field }) => (
          <TextField
            id="address2"
            label="Address 2"
            variant="outlined"
            placeholder="Enter Your Address 2"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="country"
        render={({ field }) => (
          <TextField
            id="country"
            label="Country"
            variant="outlined"
            placeholder="Enter Your Country Name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
    </>
  );
};

function getStepContent(step) {
  switch (step) {
    case 0:
      return <OverViewForm />;
    case 1:
      return <AboutForm />;
    default:
      return "unknown step";
  }
}

const LinaerStepper = () => {
  const methods = useForm({
    defaultValues: {},
  });
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = (data) => {
    console.log(data);
    if (activeStep == steps.length - 1) {
      setActiveStep(activeStep + 1);
    } else {
      setActiveStep(activeStep + 1);
      setSkippedSteps(
        skippedSteps.filter((skipItem) => skipItem !== activeStep)
      );
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSkip = () => {
    if (!isStepSkipped(activeStep)) {
      setSkippedSteps([...skippedSteps, activeStep]);
    }
    setActiveStep(activeStep + 1);
  };

  return (
    <div>
      {activeStep === steps.length ? (
        <Typography variant="h3" align="center">
          Thank You
        </Typography>
      ) : (
        <>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleNext)}>
              {getStepContent(activeStep)}

              <div className="flex">
                <Button disabled={activeStep === 0} onClick={handleBack}>
                  back
                </Button>
                {isStepOptional(activeStep) && (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSkip}
                  >
                    skip
                  </Button>
                )}
                <Button variant="contained" color="primary" type="submit">
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </div>
            </form>
          </FormProvider>
        </>
      )}
    </div>
  );
};

export default LinaerStepper;
