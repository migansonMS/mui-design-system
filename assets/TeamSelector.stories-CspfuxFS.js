import{r as x,u as w,i as E,j as r,c as y,o as b}from"./iframe-CGIeJ8J1.js";import{B as M}from"./Box-BUj2NHZS.js";import{T as k}from"./Typography-DzQDPqJW.js";import{c as S,T as N,L as O}from"./TextField-7oJPUe_1.js";import{L as I}from"./Link-BcaET1nI.js";import{g as $,l as u,L as D}from"./ListItem-ZiwyJeXV.js";import{s as F,c as A,r as G,m as _}from"./createSimplePaletteValueFilter-DRU9qZEN.js";import{u as P,B as V}from"./ButtonBase-CZnypWo-.js";import{L as W,a as z}from"./ListItemText-B0EZHAdN.js";import{C as H}from"./Checkbox-DFZncDCZ.js";import"./preload-helper-D9Z9MdNV.js";import"./useSlot-u1eMm6L0.js";import"./mergeSlotProps-Cr6uex1S.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./useSlotProps-B8iM-JIY.js";import"./Paper-BwkvltGQ.js";import"./useTheme-D_nyg7Eh.js";import"./Grow-c5ShPNZQ.js";import"./getReactElementRef-dhv8fZUv.js";import"./index-BWDXo5xj.js";import"./Modal-CIZHFvBL.js";import"./createSvgIcon-BacP6gMs.js";const U=(e,s)=>{const{ownerState:n}=e;return[s.root,n.dense&&s.dense,n.alignItems==="flex-start"&&s.alignItemsFlexStart,n.divider&&s.divider,!n.disableGutters&&s.gutters]},K=e=>{const{alignItems:s,classes:n,dense:a,disabled:i,disableGutters:l,divider:d,selected:c}=e,o=A({root:["root",a&&"dense",!l&&"gutters",d&&"divider",i&&"disabled",s==="flex-start"&&"alignItemsFlexStart",c&&"selected"]},$,n);return{...n,...o}},q=F(V,{shouldForwardProp:e=>G(e)||e==="classes",name:"MuiListItemButton",slot:"Root",overridesResolver:U})(_(({theme:e})=>({display:"flex",flexGrow:1,justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minWidth:0,boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${u.selected}`]:{backgroundColor:e.alpha((e.vars||e).palette.primary.main,(e.vars||e).palette.action.selectedOpacity),[`&.${u.focusVisible}`]:{backgroundColor:e.alpha((e.vars||e).palette.primary.main,`${(e.vars||e).palette.action.selectedOpacity} + ${(e.vars||e).palette.action.focusOpacity}`)}},[`&.${u.selected}:hover`]:{backgroundColor:e.alpha((e.vars||e).palette.primary.main,`${(e.vars||e).palette.action.selectedOpacity} + ${(e.vars||e).palette.action.hoverOpacity}`),"@media (hover: none)":{backgroundColor:e.alpha((e.vars||e).palette.primary.main,(e.vars||e).palette.action.selectedOpacity)}},[`&.${u.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${u.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},variants:[{props:({ownerState:s})=>s.divider,style:{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"}},{props:{alignItems:"flex-start"},style:{alignItems:"flex-start"}},{props:({ownerState:s})=>!s.disableGutters,style:{paddingLeft:16,paddingRight:16}},{props:({ownerState:s})=>s.dense,style:{paddingTop:4,paddingBottom:4}}]}))),J=x.forwardRef(function(s,n){const a=w({props:s,name:"MuiListItemButton"}),{alignItems:i="center",autoFocus:l=!1,component:d="div",children:c,dense:t=!1,disableGutters:o=!1,divider:f=!1,focusVisibleClassName:B,selected:R=!1,className:T,...p}=a,h=x.useContext(S),C=x.useMemo(()=>({dense:t||h.dense||!1,alignItems:i,disableGutters:o}),[i,h.dense,t,o]),g=x.useRef(null);E(()=>{l&&g.current&&g.current.focus()},[l]);const L={...a,alignItems:i,dense:C.dense,disableGutters:o,divider:f,selected:R},v=K(L),j=P(g,n);return r.jsx(S.Provider,{value:C,children:r.jsx(q,{ref:j,href:p.href||p.to,component:(p.href||p.to)&&d==="div"?"button":d,focusVisibleClassName:y(v.focusVisible,B),ownerState:L,className:y(v.root,T),...p,classes:v,children:c})})}),Le={title:"Screens/Team Selector"},Q=[{id:101,name:"Ada Lovelace"},{id:102,name:"Grace Hopper"},{id:103,name:"Linus Torvalds"},{id:104,name:"Guido van Rossum"},{id:105,name:"Donald Knuth"},{id:106,name:"Barbara Liskov"},{id:107,name:"Bjarne Stroustrup"}],m=()=>{const[e,s]=b.useState(""),[n,a]=b.useState([]),i=b.useMemo(()=>Q.filter(t=>t.name.toLowerCase().includes(e.toLowerCase())),[e]),l=t=>a(o=>o.includes(t)?o.filter(f=>f!==t):[...o,t]),d=()=>a(i.map(t=>t.id)),c=()=>a([]);return r.jsxs(M,{sx:{width:320,p:2,border:"1px solid",borderColor:"divider",borderRadius:2,bgcolor:"background.paper"},children:[r.jsx(k,{variant:"h6",gutterBottom:!0,children:"Team Selector Story"}),r.jsx(N,{fullWidth:!0,variant:"outlined",size:"small",placeholder:"Search team",value:e,onChange:t=>s(t.target.value),sx:{mb:2}}),r.jsxs(k,{variant:"body2",children:["Select:"," ",r.jsx(I,{onClick:d,sx:{cursor:"pointer"},children:"All"})," ","|"," ",r.jsx(I,{onClick:c,sx:{cursor:"pointer"},children:"None"})]}),r.jsx(O,{dense:!0,sx:{maxHeight:300,overflow:"auto"},children:i.map(t=>{const o=n.includes(t.id);return r.jsx(D,{disablePadding:!0,children:r.jsxs(J,{onClick:()=>l(t.id),selected:o,sx:{pl:.5},children:[r.jsx(W,{sx:{minWidth:0,mr:1},children:r.jsx(H,{edge:"start",checked:o,disableRipple:!0,sx:{p:1}})}),r.jsx(z,{primary:t.name})]})},t.id)})})]})};m.__docgenInfo={description:"",methods:[],displayName:"Design"};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const [search, setSearch] = React.useState("");
  const [selected, setSelected] = React.useState([]);
  const filtered = React.useMemo(() => DEMO_MEMBERS.filter(m => m.name.toLowerCase().includes(search.toLowerCase())), [search]);
  const toggle = id => setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  const selectAll = () => setSelected(filtered.map(m => m.id));
  const selectNone = () => setSelected([]);
  return <Box sx={{
    width: 320,
    p: 2,
    border: "1px solid",
    borderColor: "divider",
    borderRadius: 2,
    bgcolor: "background.paper"
  }}>\r
      <Typography variant="h6" gutterBottom>\r
        Team Selector Story\r
      </Typography>\r
\r
      <TextField fullWidth variant="outlined" size="small" placeholder="Search team" value={search} onChange={e => setSearch(e.target.value)} sx={{
      mb: 2
    }} />\r
\r
      <Typography variant="body2">\r
        Select:{" "}\r
        <Link onClick={selectAll} sx={{
        cursor: "pointer"
      }}>\r
          All\r
        </Link>{" "}\r
        |{" "}\r
        <Link onClick={selectNone} sx={{
        cursor: "pointer"
      }}>\r
          None\r
        </Link>\r
      </Typography>\r
\r
      <List dense sx={{
      maxHeight: 300,
      overflow: "auto"
    }}>\r
        {filtered.map(member => {
        const isChecked = selected.includes(member.id);
        return <ListItem key={member.id} disablePadding>\r
              <ListItemButton onClick={() => toggle(member.id)} selected={isChecked} sx={{
            pl: 0.5
          }}>\r
                <ListItemIcon sx={{
              minWidth: 0,
              mr: 1
            }}>\r
                  <Checkbox edge="start" checked={isChecked} disableRipple sx={{
                p: 1
              }} />\r
                </ListItemIcon>\r
                <ListItemText primary={member.name} />\r
              </ListItemButton>\r
            </ListItem>;
      })}\r
      </List>\r
    </Box>;
}`,...m.parameters?.docs?.source}}};const ye=["Design"];export{m as Design,ye as __namedExportsOrder,Le as default};
