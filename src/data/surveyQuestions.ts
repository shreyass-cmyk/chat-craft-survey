export type QuestionType = 'text' | 'single' | 'multi' | 'industry';

export interface QuestionOption {
  id: string;
  label: string;
  icon?: string;
}

export interface Question {
  id: string;
  type: QuestionType;
  text: string;
  subtext?: string;
  options?: QuestionOption[];
  placeholder?: string;
  validation?: 'email' | 'required';
  maxSelections?: number;
  section: number;
  industryFilter?: string[];
}

export const industries: QuestionOption[] = [
  { id: 'education', label: 'Education' },
  { id: 'logistics', label: 'Logistics and Supply Chain' },
  { id: 'insurance', label: 'Insurance' },
  { id: 'oil_gas', label: 'Oil & Gas' },
  { id: 'manufacturing', label: 'Manufacturing' },
  { id: 'construction', label: 'Construction' },
  { id: 'healthcare', label: 'Healthcare' },
  { id: 'nonprofit', label: 'Nonprofit' },
  { id: 'it_services', label: 'IT Services' },
  { id: 'consulting', label: 'Consulting' },
  { id: 'retail', label: 'Retail' },
  { id: 'financial_services', label: 'Financial Services' },
  { id: 'real_estate', label: 'Real Estate' },
  { id: 'marketing', label: 'Marketing & Advertising' },
  { id: 'media', label: 'Media' },
  { id: 'food_beverage', label: 'Food & Beverage' },
  { id: 'software', label: 'Computer Software' },
  { id: 'government', label: 'Government' },
  { id: 'automotive', label: 'Automotive & Transport' },
  { id: 'wholesale', label: 'Wholesale / Distribution' },
  { id: 'medical_device', label: 'Medical Device' },
  { id: 'entertainment', label: 'Entertainment' },
  { id: 'telecommunications', label: 'Telecommunications' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'engineering', label: 'Engineering' },
  { id: 'other', label: 'Other' },
];

export const questions: Question[] = [
  // Section 1: Basic Information
  {
    id: 'full_name',
    type: 'text',
    text: "What's your full name?",
    placeholder: 'Enter your full name',
    validation: 'required',
    section: 1,
  },
  {
    id: 'email',
    type: 'text',
    text: "What's your work email?",
    placeholder: 'you@company.com',
    validation: 'email',
    section: 1,
  },
  {
    id: 'company',
    type: 'text',
    text: 'What company do you work at?',
    placeholder: 'Your company name',
    validation: 'required',
    section: 1,
  },

  // Section 2: Product Awareness
  {
    id: 'aware_connectors',
    type: 'single',
    text: 'Were you aware that DBSync Cloud Workflow supports 30+ connectors?',
    options: [
      { id: 'yes', label: 'Yes' },
      { id: 'no', label: 'No' },
    ],
    section: 2,
  },
  {
    id: 'known_connectors',
    type: 'multi',
    text: 'Which DBSync connectors are you already familiar with?',
    options: [
      { id: 'salesforce', label: 'Salesforce' },
      { id: 'quickbooks_online', label: 'QuickBooks Online' },
      { id: 'quickbooks_desktop', label: 'QuickBooks Desktop' },
      { id: 'hubspot', label: 'HubSpot' },
      { id: 'dynamics_365', label: 'Microsoft Dynamics 365' },
      { id: 'business_central', label: 'Business Central' },
      { id: 'databases', label: 'Databases' },
      { id: 'other', label: 'Other' },
      { id: 'none', label: 'Not aware of any' },
    ],
    section: 2,
  },
  {
    id: 'looking_replication',
    type: 'single',
    text: 'Are you looking for a data replication solution for your SaaS apps?',
    subtext: 'Salesforce, D365, Business Central, HubSpot, Databases',
    options: [
      { id: 'yes', label: 'Yes' },
      { id: 'no', label: 'No' },
      { id: 'help', label: 'Not sure — need help evaluating' },
    ],
    section: 2,
  },

  // Section 3: Tools & Tech Stack
  {
    id: 'email_tools',
    type: 'multi',
    text: 'Which tools does your team use for email and communication?',
    options: [
      { id: 'gmail', label: 'Gmail' },
      { id: 'outlook', label: 'Outlook' },
      { id: 'teams', label: 'Microsoft Teams' },
      { id: 'slack', label: 'Slack' },
      { id: 'zoom', label: 'Zoom' },
      { id: 'other', label: 'Other' },
    ],
    section: 3,
  },
  {
    id: 'sales_tools',
    type: 'multi',
    text: 'Which tools do you use for Sales & Marketing?',
    options: [
      { id: 'salesforce', label: 'Salesforce' },
      { id: 'hubspot', label: 'HubSpot' },
      { id: 'zoho', label: 'Zoho CRM' },
      { id: 'dynamics', label: 'Dynamics 365' },
      { id: 'marketing_auto', label: 'Marketing automation tools' },
      { id: 'other', label: 'Other' },
      { id: 'none', label: 'None' },
    ],
    section: 3,
  },
  {
    id: 'productivity_tools',
    type: 'multi',
    text: 'Which tools do you use for Productivity & Operations?',
    options: [
      { id: 'asana', label: 'Asana' },
      { id: 'jira', label: 'Jira' },
      { id: 'monday', label: 'Monday.com' },
      { id: 'notion', label: 'Notion' },
      { id: 'google', label: 'Google Workspace' },
      { id: 'erp', label: 'ERP / Accounting software' },
      { id: 'other', label: 'Other' },
    ],
    section: 3,
  },

  // Section 4: Industry Selection
  {
    id: 'industry',
    type: 'industry',
    text: 'Which industry best describes your organization?',
    subtext: 'This helps me ask only relevant questions.',
    section: 4,
  },

  // Section 5: Industry-Specific - Manufacturing
  {
    id: 'manufacturing_erp',
    type: 'multi',
    text: 'Which systems do you use to manage operations?',
    options: [
      { id: 'sap', label: 'SAP' },
      { id: 'netsuite', label: 'NetSuite' },
      { id: 'business_central', label: 'Business Central' },
      { id: 'infor', label: 'Infor' },
      { id: 'oracle', label: 'Oracle ERP' },
      { id: 'custom', label: 'Custom / On-prem systems' },
      { id: 'other', label: 'Other' },
    ],
    section: 5,
    industryFilter: ['manufacturing', 'engineering', 'automotive'],
  },

  // Section 5: Industry-Specific - Healthcare
  {
    id: 'healthcare_systems',
    type: 'multi',
    text: 'Which healthcare or operations systems do you use?',
    options: [
      { id: 'ehr', label: 'EHR / EMR systems' },
      { id: 'billing', label: 'Billing systems' },
      { id: 'scheduling', label: 'Scheduling tools' },
      { id: 'crm', label: 'CRM' },
      { id: 'accounting', label: 'Accounting software' },
      { id: 'other', label: 'Other' },
    ],
    section: 5,
    industryFilter: ['healthcare', 'medical_device'],
  },

  // Section 5: Industry-Specific - Retail
  {
    id: 'retail_erp',
    type: 'multi',
    text: 'Which ERP or accounting software do you use?',
    options: [
      { id: 'sap', label: 'SAP (S/4HANA, Business One)' },
      { id: 'netsuite', label: 'Oracle NetSuite' },
      { id: 'dynamics_bc', label: 'Microsoft Dynamics 365 Business Central' },
      { id: 'quickbooks_online', label: 'QuickBooks Online' },
      { id: 'quickbooks_desktop', label: 'QuickBooks Desktop' },
      { id: 'xero', label: 'Xero' },
      { id: 'sage', label: 'Sage Intacct' },
      { id: 'other', label: 'Other' },
    ],
    section: 5,
    industryFilter: ['retail', 'food_beverage', 'wholesale'],
  },
  {
    id: 'retail_crm',
    type: 'multi',
    text: 'Which CRM do you use?',
    options: [
      { id: 'salesforce', label: 'Salesforce' },
      { id: 'hubspot', label: 'HubSpot CRM' },
      { id: 'zoho', label: 'Zoho CRM' },
      { id: 'dynamics', label: 'Microsoft Dynamics 365 Sales' },
      { id: 'pipedrive', label: 'Pipedrive' },
      { id: 'other', label: 'Other' },
      { id: 'none', label: 'Not using a CRM' },
    ],
    section: 5,
    industryFilter: ['retail', 'food_beverage', 'wholesale'],
  },

  // Section 5: Industry-Specific - Construction
  {
    id: 'construction_pm',
    type: 'multi',
    text: 'Which Project Management Tools do you use?',
    options: [
      { id: 'procore', label: 'Procore' },
      { id: 'autodesk', label: 'Autodesk Construction Cloud' },
      { id: 'primavera', label: 'Oracle Primavera P6' },
      { id: 'ms_project', label: 'Microsoft Project' },
      { id: 'smartsheet', label: 'Smartsheet' },
      { id: 'monday', label: 'Monday.com' },
      { id: 'other', label: 'Other' },
      { id: 'none', label: 'Not using a dedicated tool' },
    ],
    section: 5,
    industryFilter: ['construction', 'real_estate', 'architecture'],
  },

  // Section 5: Industry-Specific - IT Services
  {
    id: 'it_crm',
    type: 'multi',
    text: "Let's talk about customer management. Which CRM systems do you use?",
    options: [
      { id: 'salesforce', label: 'Salesforce' },
      { id: 'hubspot', label: 'HubSpot CRM' },
      { id: 'zoho', label: 'Zoho CRM' },
      { id: 'dynamics', label: 'Microsoft Dynamics 365' },
      { id: 'pipedrive', label: 'Pipedrive' },
      { id: 'freshsales', label: 'Freshsales' },
      { id: 'other', label: 'Other' },
      { id: 'none', label: 'Not using a CRM' },
    ],
    section: 5,
    industryFilter: ['it_services', 'software', 'consulting'],
  },
  {
    id: 'it_ticketing',
    type: 'multi',
    text: 'Which ticketing or service management tools do you use?',
    options: [
      { id: 'servicenow', label: 'ServiceNow' },
      { id: 'jira_sm', label: 'Jira Service Management' },
      { id: 'zendesk', label: 'Zendesk' },
      { id: 'freshdesk', label: 'Freshdesk' },
      { id: 'zoho_desk', label: 'Zoho Desk' },
      { id: 'other', label: 'Other' },
      { id: 'none', label: 'Not using a ticketing system' },
    ],
    section: 5,
    industryFilter: ['it_services', 'software', 'consulting'],
  },

  // Section 5: Industry-Specific - Logistics
  {
    id: 'logistics_erp',
    type: 'multi',
    text: 'Which ERP systems do you use?',
    options: [
      { id: 'sap', label: 'SAP (S/4HANA, ECC)' },
      { id: 'netsuite', label: 'Oracle NetSuite' },
      { id: 'dynamics_bc', label: 'Microsoft Dynamics 365 Business Central' },
      { id: 'infor', label: 'Infor CloudSuite' },
      { id: 'epicor', label: 'Epicor' },
      { id: 'other', label: 'Other' },
    ],
    section: 5,
    industryFilter: ['logistics'],
  },
  {
    id: 'logistics_wms',
    type: 'multi',
    text: 'Which Warehouse Management Systems (WMS) do you use?',
    options: [
      { id: 'manhattan', label: 'Manhattan WMS' },
      { id: 'blue_yonder', label: 'Blue Yonder (JDA)' },
      { id: 'sap_ewm', label: 'SAP Extended Warehouse Management' },
      { id: 'oracle', label: 'Oracle WMS Cloud' },
      { id: 'netsuite', label: 'NetSuite WMS' },
      { id: 'other', label: 'Other' },
      { id: 'none', label: 'Not using a WMS' },
    ],
    section: 5,
    industryFilter: ['logistics'],
  },

  // Section 6: Automation Needs
  {
    id: 'manual_processes',
    type: 'multi',
    text: 'Which manual processes would you like to automate?',
    options: [
      { id: 'data_entry', label: 'Manual data entry' },
      { id: 'copy_paste', label: 'Copy-paste between systems' },
      { id: 'csv', label: 'CSV imports / exports' },
      { id: 'emails', label: 'Repetitive emails' },
      { id: 'reports', label: 'Report generation' },
      { id: 'reconciliation', label: 'Data reconciliation' },
      { id: 'approvals', label: 'Approval workflows' },
      { id: 'none', label: 'None' },
    ],
    section: 6,
  },
  {
    id: 'pain_points',
    type: 'multi',
    text: 'What are your top 3 operational pain points?',
    maxSelections: 3,
    options: [
      { id: 'manual', label: 'Too much manual work' },
      { id: 'inconsistent', label: 'Data inconsistencies' },
      { id: 'visibility', label: 'Lack of real-time visibility' },
      { id: 'integration', label: 'Integration failures' },
      { id: 'reporting', label: 'Slow reporting' },
      { id: 'effort', label: 'High operational effort' },
      { id: 'other', label: 'Other' },
    ],
    section: 6,
  },

  // Section 7: Feedback & Future
  {
    id: 'improvement',
    type: 'text',
    text: 'If you could improve one thing about DBSync Cloud Workflow, what would it be?',
    placeholder: 'Share your thoughts...',
    section: 7,
  },
  {
    id: 'future_feature',
    type: 'text',
    text: "Any feature or integration you'd love to see in the next 3-6 months?",
    placeholder: 'Tell us what you need...',
    section: 7,
  },
];

export const sectionNames: Record<number, string> = {
  1: 'Basic Info',
  2: 'Product Awareness',
  3: 'Tech Stack',
  4: 'Industry',
  5: 'Industry Tools',
  6: 'Automation',
  7: 'Feedback',
};
