import{j as r}from"./iframe-Dn9ulxlD.js";import{S as i}from"./Stack-D8ZbXtn1.js";import{P as t}from"./Paper-BDcbMSYi.js";import{T as a}from"./Typography-BsqxXW4v.js";import"./preload-helper-D9Z9MdNV.js";import"./createSimplePaletteValueFilter-D0nrBtGU.js";import"./getThemeProps-Crwei_al.js";import"./useTheme-C7KZnVu5.js";const v={title:"Components/Paper"},e=()=>r.jsxs(i,{direction:"column",spacing:2,children:[r.jsxs(t,{variant:"card",children:[r.jsx(a,{variant:"h4",children:'variant="card"'}),r.jsx(a,{variant:"body2",children:"Border, radius, padding from theme."})]}),r.jsxs(t,{variant:"home-section",children:[r.jsx(a,{variant:"h4",children:'variant="home-section"'}),r.jsx(a,{variant:"body2",children:"Custom section surface from theme."})]})]}),o=()=>r.jsx(i,{direction:"row",spacing:2,children:[0,1,4,8,12,24].map(n=>r.jsx(t,{elevation:n,children:r.jsxs(a,{variant:"body2",children:["elevation=",n]})},n))});e.__docgenInfo={description:"",methods:[],displayName:"Variants"};o.__docgenInfo={description:"",methods:[],displayName:"Elevations"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => <Stack direction="column" spacing={2}>\r
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
  </Stack>`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => <Stack direction="row" spacing={2}>\r
    {[0, 1, 4, 8, 12, 24].map(elev => <Paper key={elev} elevation={elev}>\r
        <Typography variant="body2">elevation={elev}</Typography>\r
      </Paper>)}\r
  </Stack>`,...o.parameters?.docs?.source}}};const g=["Variants","Elevations"];export{o as Elevations,e as Variants,g as __namedExportsOrder,v as default};
