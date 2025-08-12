import{j as r}from"./iframe-D1KZucPw.js";import{u as c}from"./useTheme-91eHUXnP.js";import{S as o}from"./Stack-BAaW8kVH.js";import{T as l}from"./Typography-BOYhoNXW.js";import{B as i}from"./Box-DickAnZA.js";import"./preload-helper-D9Z9MdNV.js";import"./createSimplePaletteValueFilter-CqGfQfEy.js";import"./getThemeProps-D2GJnLhE.js";const e=({label:a,color:n})=>r.jsxs(i,{sx:{width:120},children:[r.jsx(i,{sx:{height:48,borderRadius:1,bgcolor:n,border:"1px solid rgba(0,0,0,0.08)"}}),r.jsx(l,{variant:"caption",children:a})]}),S={title:"Theme/Palette"},t=()=>{const a=c();return r.jsxs(o,{spacing:2,children:[r.jsx(l,{variant:"h6",children:"Primary"}),r.jsxs(o,{direction:"row",spacing:1,children:[r.jsx(e,{label:"main",color:a.palette.primary.main}),r.jsx(e,{label:"600",color:a.palette.primary[600]||a.palette.primary.main}),r.jsx(e,{label:"light",color:a.palette.primary.light}),r.jsx(e,{label:"dark",color:a.palette.primary.dark})]}),r.jsx(l,{variant:"h6",sx:{mt:2},children:"Secondary"}),r.jsxs(o,{direction:"row",spacing:1,children:[r.jsx(e,{label:"main",color:a.palette.secondary.main}),r.jsx(e,{label:"light",color:a.palette.secondary.light}),r.jsx(e,{label:"dark",color:a.palette.secondary.dark})]})]})};t.__docgenInfo={description:"",methods:[],displayName:"PrimarySecondary"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const theme = useTheme();
  return <Stack spacing={2}>\r
      <Typography variant="h6">Primary</Typography>\r
      <Stack direction="row" spacing={1}>\r
        <Swatch label="main" color={theme.palette.primary.main} />\r
        <Swatch label="600" color={theme.palette.primary[600] || theme.palette.primary.main} />\r
        <Swatch label="light" color={theme.palette.primary.light} />\r
        <Swatch label="dark" color={theme.palette.primary.dark} />\r
      </Stack>\r
\r
      <Typography variant="h6" sx={{
      mt: 2
    }}>Secondary</Typography>\r
      <Stack direction="row" spacing={1}>\r
        <Swatch label="main" color={theme.palette.secondary.main} />\r
        <Swatch label="light" color={theme.palette.secondary.light} />\r
        <Swatch label="dark" color={theme.palette.secondary.dark} />\r
      </Stack>\r
    </Stack>;
}`,...t.parameters?.docs?.source}}};const b=["PrimarySecondary"];export{t as PrimarySecondary,b as __namedExportsOrder,S as default};
