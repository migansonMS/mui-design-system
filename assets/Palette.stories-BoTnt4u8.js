import{j as r}from"./iframe-CkTs3eTz.js";import{u as i}from"./useTheme-DajQEPpF.js";import{S as t}from"./Stack-BrWgwXbf.js";import{T as n}from"./Typography-CRj5WkeB.js";import{B as c}from"./Box-B8azb6oa.js";import"./preload-helper-D9Z9MdNV.js";import"./createSimplePaletteValueFilter-DQpw-qH5.js";import"./getThemeProps-B9ZzK8jZ.js";const e=({label:a,color:l})=>r.jsxs(c,{sx:{width:160},children:[r.jsx(c,{sx:{height:48,borderRadius:1,bgcolor:l,border:"1px solid",borderColor:"divider"}}),r.jsxs(n,{variant:"caption",children:[a," ",typeof l=="string"?`· ${l}`:""]})]}),y={title:"Theme/Palette"},o=()=>{const a=i();return r.jsxs(t,{spacing:2,children:[r.jsx(n,{variant:"h4",children:"Primary"}),r.jsxs(t,{direction:"row",spacing:1,children:[r.jsx(e,{label:"main",color:a.palette.primary.main}),r.jsx(e,{label:"600",color:a.palette.primary[600]}),r.jsx(e,{label:"400",color:a.palette.primary[400]}),r.jsx(e,{label:"contrastText",color:a.palette.primary.contrastText})]}),r.jsx(n,{variant:"h4",sx:{mt:2},children:"Secondary"}),r.jsxs(t,{direction:"row",spacing:1,children:[r.jsx(e,{label:"main / 700",color:a.palette.secondary.main}),r.jsx(e,{label:"800",color:a.palette.secondary[800]}),r.jsx(e,{label:"300",color:a.palette.secondary[300]}),r.jsx(e,{label:"contrastText",color:a.palette.secondary.contrastText})]}),r.jsx(n,{variant:"h4",sx:{mt:2},children:"Warning"}),r.jsxs(t,{direction:"row",spacing:1,children:[r.jsx(e,{label:"main / 500",color:a.palette.warning.main}),r.jsx(e,{label:"900",color:a.palette.warning[900]}),r.jsx(e,{label:"400",color:a.palette.warning[400]}),r.jsx(e,{label:"50 (bg)",color:a.palette.warning[50]})]}),r.jsx(n,{variant:"h4",sx:{mt:2},children:"Alert/Warning Tokens"}),r.jsxs(t,{direction:"row",spacing:1,children:[r.jsx(e,{label:"color (MS Orange/600)",color:a.palette.ms?.alertWarning.color}),r.jsx(e,{label:"background (amber/50)",color:a.palette.ms?.alertWarning.background})]}),r.jsx(n,{variant:"h4",sx:{mt:2},children:"Background"}),r.jsxs(t,{direction:"row",spacing:1,children:[r.jsx(e,{label:"light",color:a.palette.background.light}),r.jsx(e,{label:"dark",color:a.palette.background.dark})]}),r.jsx(n,{variant:"h4",sx:{mt:2},children:"Custom"}),r.jsx(t,{direction:"row",spacing:1,children:r.jsx(e,{label:"purple",color:a.palette.custom.purple})})]})};o.__docgenInfo={description:"",methods:[],displayName:"BrandPalette"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  const theme = useTheme();
  return <Stack spacing={2}>\r
      <Typography variant="h4">Primary</Typography>\r
      <Stack direction="row" spacing={1}>\r
        <Swatch label="main" color={theme.palette.primary.main} />\r
        <Swatch label="600" color={theme.palette.primary[600]} />\r
        <Swatch label="400" color={theme.palette.primary[400]} />\r
        <Swatch label="contrastText" color={theme.palette.primary.contrastText} />\r
      </Stack>\r
\r
      <Typography variant="h4" sx={{
      mt: 2
    }}>\r
        Secondary\r
      </Typography>\r
      <Stack direction="row" spacing={1}>\r
        <Swatch label="main / 700" color={theme.palette.secondary.main} />\r
        <Swatch label="800" color={theme.palette.secondary[800]} />\r
        <Swatch label="300" color={theme.palette.secondary[300]} />\r
        <Swatch label="contrastText" color={theme.palette.secondary.contrastText} />\r
      </Stack>\r
\r
      <Typography variant="h4" sx={{
      mt: 2
    }}>\r
        Warning\r
      </Typography>\r
      <Stack direction="row" spacing={1}>\r
        <Swatch label="main / 500" color={theme.palette.warning.main} />\r
        <Swatch label="900" color={theme.palette.warning[900]} />\r
        <Swatch label="400" color={theme.palette.warning[400]} />\r
        <Swatch label="50 (bg)" color={theme.palette.warning[50]} />\r
      </Stack>\r
\r
      <Typography variant="h4" sx={{
      mt: 2
    }}>\r
        Alert/Warning Tokens\r
      </Typography>\r
      <Stack direction="row" spacing={1}>\r
        <Swatch label="color (MS Orange/600)" color={theme.palette.ms?.alertWarning.color} />\r
        <Swatch label="background (amber/50)" color={theme.palette.ms?.alertWarning.background} />\r
      </Stack>\r
      <Typography variant="h4" sx={{
      mt: 2
    }}>\r
        Background\r
      </Typography>\r
      <Stack direction="row" spacing={1}>\r
        <Swatch label="light" color={theme.palette.background.light} />\r
        <Swatch label="dark" color={theme.palette.background.dark} />\r
      </Stack>\r
\r
      <Typography variant="h4" sx={{
      mt: 2
    }}>\r
        Custom\r
      </Typography>\r
      <Stack direction="row" spacing={1}>\r
        <Swatch label="purple" color={theme.palette.custom.purple} />\r
      </Stack>\r
    </Stack>;
}`,...o.parameters?.docs?.source}}};const w=["BrandPalette"];export{o as BrandPalette,w as __namedExportsOrder,y as default};
