// @todo: remove * from required field labels after replacing widgets with Input compoenent

export const emailField = {
  name: "email",
  label: "Email address *",
  helpText: "Used to send a copy of this form for your records",
  widget: "text",
  required: true,
};

export const addressField = {
  name: "polygonAddress",
  label: "Polygon address *",
  helpText:
    "Address where your prize should go. If you use a smart contract wallet, please contact one of our organizers in Discord in addition to adding the address here.",
  widget: "text",
  required: true,
};

export const titleField = {
  name: "title",
  label: "Title *",
  helpText:
    "Summarize your findings for the bug or vulnerability. (This will be the issue title.)",
  widget: "text",
  required: true,
};

export const wardenField = (wardens) => {
  return {
    name: "handle",
    label: "Handle *",
    helpText: "Handle you're competing under (individual or team name)",
    widget: "warden",
    required: true,
    options: wardens,
  };
};

export const linksToCodeField = {
  name: "linksToCode",
  label: "",
  helpText: "",
  widget: "linksToCode",
  required: true,
};

export const riskField = {
  name: "risk",
  label: "Risk rating *",
  widget: "select",
  required: true,
  options: [
    {
      label: "Gas Optimizations",
      value: "G (Gas Optimization)",
    },
    {
      label: "QA Report (low / non-critical)",
      value: "QA (Quality Assurance)",
    },
    {
      label: "Medium Risk",
      value: "2 (Med Risk)",
    },
    {
      label: "High Risk",
      value: "3 (High Risk)",
    },
  ],
};

export const classificationField = {
  name: "classification",
  label: "Issue Classification *",
  widget: "select",
  required: true,
  options: [
    {
      label: "Blockchain - Block content manipulation",
      value: "Classification-Block content manipulation",
    },
    {
      label: "Blockchain - Contract interaction",
      value: "Classification-Contract interaction",
    },
    {
      label: "Blockchain - Gas limitations",
      value: "Classification-Gas limitations",
    },
    {
      label: "Blockchain - Message structure",
      value: "Classification-Message structure",
    },
    {
      label: "Blockchain - Ether transfer",
      value: "Ether transfer",
    },
    {
      label: "Language - Arithmetic",
      value: "Classification-Arithmetic",
    },
    {
      label: "Language - Storage access",
      value: "Classification-Storage access",
    },
    {
      label: "Language - Internal control flow",
      value: "Classification-Internal control flow",
    },
    {
      label: "Model - Authorization",
      value: "Classification-Authorization",
    },
    {
      label: "Model - Trust",
      value: "Classification-Trust",
    },
    {
      label: "Model - Privacy",
      value: "Classification-Privacy",
    },
    {
      label: "Model - Economy",
      value: "Classification-Economy",
    },
    {
      label: "Other",
      value: "Classification-Other",
    }
  ],
};

export const vulnerabilityDetailsField = {
  name: "details",
  label: "Vulnerability details *",
  helpText:
    "Link to all referenced sections of code in GitHub. \n You can use [markdown](https://www.markdownguide.org/basic-syntax/) including [markdown math notation](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions) in this field",
  type: "markdown",
  widget: "textarea",
  required: true,
};

export const qaGasDetailsField = {
  name: "qaGasDetails",
  label: "Report contents *",
  helpText:
    "Link to all referenced sections of code in GitHub. \n You can use [markdown](https://www.markdownguide.org/basic-syntax/) including [markdown math notation](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions) in this field",
  type: "markdown",
  widget: "textarea",
  required: true,
};
