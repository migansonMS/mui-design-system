import{j as a}from"./iframe-D1KZucPw.js";import{S as d}from"./Stack-BAaW8kVH.js";import{P as e}from"./Paper-B0PEe_2q.js";import{T as r}from"./Typography-BOYhoNXW.js";import"./preload-helper-D9Z9MdNV.js";import"./createSimplePaletteValueFilter-CqGfQfEy.js";import"./getThemeProps-D2GJnLhE.js";import"./useTheme-91eHUXnP.js";const v={title:"Components/Paper"},n=()=>a.jsxs(d,{direction:"column",spacing:2,children:[a.jsxs(e,{"data-surface":"padded",children:[a.jsx(r,{variant:"h6",children:"Default Padded Paper"}),a.jsx(r,{variant:"body2",children:'All padding comes from theme (data-surface="padded").'})]}),a.jsxs(e,{"data-surface":"tile",children:[a.jsx(r,{variant:"h6",children:"Default Padded Paper"}),a.jsx(r,{variant:"body2",children:'All padding comes from theme (data-surface="padded").'})]}),a.jsxs(e,{variant:"card",children:[a.jsx(r,{variant:"h6",children:'variant="card"'}),a.jsx(r,{variant:"body2",children:"Border, radius, padding from theme."})]}),a.jsxs(e,{variant:"home-section",children:[a.jsx(r,{variant:"h6",children:'variant="home-section"'}),a.jsx(r,{variant:"body2",children:"Custom section surface from theme."})]})]}),t=()=>a.jsx(d,{direction:"row",spacing:2,children:[0,1,4,8,12,24].map(o=>a.jsx(e,{"data-surface":"tile",elevation:o,children:a.jsxs(r,{variant:"subtitle2",children:["elevation=",o]})},o))});n.__docgenInfo={description:"",methods:[],displayName:"Variants"};t.__docgenInfo={description:"",methods:[],displayName:"Elevations"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => <Stack direction="column" spacing={2}>\r
    <Paper data-surface="padded">\r
      <Typography variant="h6">Default Padded Paper</Typography>\r
      <Typography variant="body2">\r
        All padding comes from theme (data-surface="padded").\r
      </Typography>\r
    </Paper>\r
    <Paper data-surface="tile">\r
      <Typography variant="h6">Default Padded Paper</Typography>\r
      <Typography variant="body2">\r
        All padding comes from theme (data-surface="padded").\r
      </Typography>\r
    </Paper>\r
    <Paper variant="card">\r
      <Typography variant="h6">variant="card"</Typography>\r
      <Typography variant="body2">\r
        Border, radius, padding from theme.\r
      </Typography>\r
    </Paper>\r
\r
    <Paper variant="home-section">\r
      <Typography variant="h6">variant="home-section"</Typography>\r
      <Typography variant="body2">\r
        Custom section surface from theme.\r
      </Typography>\r
    </Paper>\r
  </Stack>`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => <Stack direction="row" spacing={2}>\r
    {[0, 1, 4, 8, 12, 24].map(elev => <Paper key={elev} data-surface="tile" elevation={elev}>\r
        <Typography variant="subtitle2">elevation={elev}</Typography>\r
      </Paper>)}\r
  </Stack>`,...t.parameters?.docs?.source}}};const g=["Variants","Elevations"];export{t as Elevations,n as Variants,g as __namedExportsOrder,v as default};
