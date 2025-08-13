import{r as a,u as h,j as o,c as f}from"./iframe-CGIeJ8J1.js";import{B as n}from"./Button-CD2Yw_3v.js";import{D,g as x,a as y,b as C,c as T}from"./DialogContent-DjihnpME.js";import{s as b,c as j}from"./createSimplePaletteValueFilter-DRU9qZEN.js";import{T as r}from"./Typography-DzQDPqJW.js";import"./preload-helper-D9Z9MdNV.js";import"./ButtonBase-CZnypWo-.js";import"./useTheme-D_nyg7Eh.js";import"./useSlot-u1eMm6L0.js";import"./mergeSlotProps-Cr6uex1S.js";import"./Paper-BwkvltGQ.js";import"./Modal-CIZHFvBL.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./getReactElementRef-dhv8fZUv.js";import"./index-BWDXo5xj.js";const B=s=>{const{classes:t}=s;return j({root:["root"]},x,t)},O=b(r,{name:"MuiDialogTitle",slot:"Root"})({padding:"16px 24px",flex:"0 0 auto"}),k=a.forwardRef(function(t,i){const l=h({props:t,name:"MuiDialogTitle"}),{className:m,id:c,...d}=l,p=l,g=B(p),{titleId:u=c}=a.useContext(D);return o.jsx(O,{component:"h2",className:f(g.root,m),ownerState:p,ref:i,variant:"h6",id:c??u,...d})}),G={title:"Components/Dialog"},e=()=>{const[s,t]=a.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(n,{variant:"contained",onClick:()=>t(!0),children:"Open dialog"}),o.jsxs(y,{open:s,onClose:()=>t(!1),children:[o.jsx(k,{children:"Dialog Title"}),o.jsxs(C,{children:[o.jsx(r,{className:"dialog-body",children:"All styling comes from the theme (paper, spacing, backdrop blur)."}),o.jsx(r,{className:"dialog-body",children:"All styling comes from the theme (paper, spacing, backdrop blur)."})]}),o.jsxs(T,{children:[o.jsx(n,{onClick:()=>t(!1),variant:"outlined",children:"Cancel"}),o.jsx(n,{onClick:()=>t(!1),variant:"contained",children:"OK"})]})]})]})};e.__docgenInfo={description:"",methods:[],displayName:"Basic"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  const [open, setOpen] = React.useState(false);
  return <>\r
      <Button variant="contained" onClick={() => setOpen(true)}>\r
        Open dialog\r
      </Button>\r
      <Dialog open={open} onClose={() => setOpen(false)}>\r
        <DialogTitle>Dialog Title</DialogTitle>\r
        <DialogContent>\r
          <Typography className="dialog-body">\r
            All styling comes from the theme (paper, spacing, backdrop blur).\r
          </Typography>\r
          <Typography className="dialog-body">\r
            All styling comes from the theme (paper, spacing, backdrop blur).\r
          </Typography>\r
        </DialogContent>\r
        <DialogActions>\r
          <Button onClick={() => setOpen(false)} variant="outlined">\r
            Cancel\r
          </Button>\r
          <Button onClick={() => setOpen(false)} variant="contained">\r
            OK\r
          </Button>\r
        </DialogActions>\r
      </Dialog>\r
    </>;
}`,...e.parameters?.docs?.source}}};const H=["Basic"];export{e as Basic,H as __namedExportsOrder,G as default};
