const itemTemplates = {
  personal: {
    placeholders: {
      firstName: "First Name",
      lastName: "Last Name",
      title: "Title",
      address: "City, Province/State, Country",
      phone: "Phone Number",
      email: "Email Address",
      bio: "Short Bio",
    },
    dataType: "personal",
    dataTitleLong: "PERSONAL INFORMATION",
    dataTitleShort: "PERSONAL",
    dataHasButtons: false,
  },
  experience: {
    placeholders: {
      organization: "Organization/Company Name",
      location: "City, Country",
      from: "From",
      to: "To",
      role: "Role",
      description: "Role Description",
    },
    dataType: "experience",
    dataTitleLong: "WORK EXPERIENCE",
    dataTitleShort: "EXPERIENCE",
    dataHasButtons: true,
  },
  education: {
    placeholders: {
      organization: "School/College/University Name",
      location: "City, Country",
      from: "From",
      to: "To",
      degree: "Degree",
      field: "Field Of Study",
    },
    dataType: "education",
    dataTitleLong: "EDUCATION",
    dataTitleShort: "EDUCATION",
    dataHasButtons: true,
  },
};

export default itemTemplates;
