import { useState , useEffect } from "react";
export default function useProfileForm(profile , onSubmit){
    const[form , setForm] = useState({
        name : "",
        businessNmae : "",
        contactNumber: "",
        isGstRegistered: null,
        gstNumber: "",

    });

    useEffect(() => {
        if(profile) {
            setForm({
        name: profile.name || "",
        businessName: profile.businessName || "",
        contactNumber: profile.contactNumber || "",
        isGstRegistered: profile.isGstRegistered,
        gstNumber: profile.gstNumber || "",
      });
    }
    },[profile]);
     const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    const { name, businessName, contactNumber, isGstRegistered, gstNumber } = form;

    if (!name || !businessName || !contactNumber) {
      alert("All fields required");
      return;
    }

    if (isGstRegistered === null) {
      alert("Select GST option");
      return;
    }

    if (isGstRegistered && !gstNumber) {
      alert("Enter GST number");
      return;
    }

    onSubmit(form);
  };

  return {
    form,
    handleChange,
    handleSubmit,
  };

}