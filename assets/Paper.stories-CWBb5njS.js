import{j as r}from"./iframe-CkTs3eTz.js";import{S as t}from"./Stack-BrWgwXbf.js";import{P as o}from"./Paper-Cu2WgBAQ.js";import{T as a}from"./Typography-CRj5WkeB.js";import{c as s}from"./createSvgIcon-C9iwLWcC.js";import{B as p}from"./Box-B8azb6oa.js";import"./preload-helper-D9Z9MdNV.js";import"./createSimplePaletteValueFilter-DQpw-qH5.js";import"./getThemeProps-B9ZzK8jZ.js";import"./useTheme-DajQEPpF.js";const c=s([r.jsx("path",{d:"M12 5.99 19.53 19H4.47zM12 2 1 21h22z"},"0"),r.jsx("path",{d:"M13 16h-2v2h2zm0-6h-2v5h2z"},"1")]),f={title:"Components/Paper"},e=()=>r.jsxs(t,{direction:"column",spacing:2,children:[r.jsxs(o,{variant:"card",children:[r.jsx(a,{variant:"h4",children:'variant="card"'}),r.jsx(a,{variant:"body2",children:"Border, radius, padding from theme."})]}),r.jsxs(o,{variant:"home-section",children:[r.jsx(a,{variant:"h4",children:'variant="home-section"'}),r.jsx(a,{variant:"body2",children:"Custom section surface from theme."})]}),r.jsxs(o,{variant:"warning",children:[r.jsx(c,{className:"PaperWarning-icon"}),r.jsxs(p,{children:[r.jsx(a,{className:"PaperWarning-title",children:"Action required"}),r.jsx(a,{className:"PaperWarning-body",children:"Your schedule for this month isn’t confirmed yet. Please review and accept it to proceed."})]})]})]}),n=()=>r.jsx(t,{direction:"row",spacing:2,children:[0,1,4,8,12,24].map(i=>r.jsx(o,{elevation:i,children:r.jsxs(a,{variant:"body2",children:["elevation=",i]})},i))});e.__docgenInfo={description:"",methods:[],displayName:"Variants"};n.__docgenInfo={description:"",methods:[],displayName:"Elevations"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => <Stack direction="column" spacing={2}>\r
    <Paper variant="card">\r
      <Typography variant="h4">variant="card"</Typography>\r
      <Typography variant="body2">\r
        Border, radius, padding from theme.\r
      </Typography>\r
    </Paper>\r
\r
    <Paper variant="home-section">\r
      <Typography variant="h4">variant="home-section"</Typography>\r
      <Typography variant="body2">\r
        Custom section surface from theme.\r
      </Typography>\r
    </Paper>\r
\r
    <Paper variant="warning">\r
      <WarningAmber className="PaperWarning-icon" />\r
      <Box>\r
        <Typography className="PaperWarning-title">Action required</Typography>\r
        <Typography className="PaperWarning-body">\r
          Your schedule for this month isn’t confirmed yet. Please review and\r
          accept it to proceed.\r
        </Typography>\r
      </Box>\r
    </Paper>\r
  </Stack>`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => <Stack direction="row" spacing={2}>\r
    {[0, 1, 4, 8, 12, 24].map(elev => <Paper key={elev} elevation={elev}>\r
        <Typography variant="body2">elevation={elev}</Typography>\r
      </Paper>)}\r
  </Stack>`,...n.parameters?.docs?.source}}};const j=["Variants","Elevations"];export{n as Elevations,e as Variants,j as __namedExportsOrder,f as default};
