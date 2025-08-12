import{n as Oe,r as c,o as Pe,j as t,c as re,p as ze,u as ce,a as te,e as Me}from"./iframe-D1KZucPw.js";import{P as T}from"./Paper-B0PEe_2q.js";import{T as ue}from"./Typography-BOYhoNXW.js";import{u as Ae,S as ie}from"./Stack-BAaW8kVH.js";import{o as $e,a as Ce,p as _e,S as Ne,c as Be,T as b,f as H,h as de,e as pe,M as U,A as Z,C as R,j as C}from"./TextField-lu3eiqzx.js";import{c as ne,a as ae,g as me,s as O,r as ve,m as ye,b as fe}from"./createSimplePaletteValueFilter-CqGfQfEy.js";import{u as Ve}from"./ButtonBase-_nl1NxqU.js";import{c as Se}from"./createSvgIcon-BWDBW-4I.js";import{u as Le}from"./useSlot-BqZuFEKO.js";import{c as We}from"./Modal-DMfr34Y6.js";import{B as Ee}from"./Button-RCRtz_FP.js";import{u as qe}from"./useTheme-91eHUXnP.js";import{s as De}from"./getThemeProps-D2GJnLhE.js";import"./preload-helper-D9Z9MdNV.js";import"./ownerWindow-6z4QwRpV.js";import"./useSlotProps-CCcPKDBJ.js";import"./Chip-DnQxUUWr.js";import"./dividerClasses-Emyf0_sA.js";import"./index-B49lhIPH.js";const Ue=(e,o)=>e.filter(r=>o.includes(r)),P=(e,o,r)=>{const n=e.keys[0];Array.isArray(o)?o.forEach((a,s)=>{r((i,h)=>{s<=e.keys.length-1&&(s===0?Object.assign(i,h):i[e.up(e.keys[s])]=h)},a)}):o&&typeof o=="object"?(Object.keys(o).length>e.keys.length?e.keys:Ue(e.keys,Object.keys(o))).forEach(s=>{if(e.keys.includes(s)){const i=o[s];i!==void 0&&r((h,x)=>{n===s?Object.assign(h,x):h[e.up(s)]=x},i)}}):(typeof o=="number"||typeof o=="string")&&r((a,s)=>{Object.assign(a,s)},o)};function oe(e){return`--Grid-${e}Spacing`}function se(e){return`--Grid-parent-${e}Spacing`}const ge="--Grid-columns",F="--Grid-parent-columns",Ke=({theme:e,ownerState:o})=>{const r={};return P(e.breakpoints,o.size,(n,a)=>{let s={};a==="grow"&&(s={flexBasis:0,flexGrow:1,maxWidth:"100%"}),a==="auto"&&(s={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"}),typeof a=="number"&&(s={flexGrow:0,flexBasis:"auto",width:`calc(100% * ${a} / var(${F}) - (var(${F}) - ${a}) * (var(${se("column")}) / var(${F})))`}),n(r,s)}),r},He=({theme:e,ownerState:o})=>{const r={};return P(e.breakpoints,o.offset,(n,a)=>{let s={};a==="auto"&&(s={marginLeft:"auto"}),typeof a=="number"&&(s={marginLeft:a===0?"0px":`calc(100% * ${a} / var(${F}) + var(${se("column")}) * ${a} / var(${F}))`}),n(r,s)}),r},Ze=({theme:e,ownerState:o})=>{if(!o.container)return{};const r={[ge]:12};return P(e.breakpoints,o.columns,(n,a)=>{const s=a??12;n(r,{[ge]:s,"> *":{[F]:s}})}),r},Je=({theme:e,ownerState:o})=>{if(!o.container)return{};const r={};return P(e.breakpoints,o.rowSpacing,(n,a)=>{const s=typeof a=="string"?a:e.spacing?.(a);n(r,{[oe("row")]:s,"> *":{[se("row")]:s}})}),r},Qe=({theme:e,ownerState:o})=>{if(!o.container)return{};const r={};return P(e.breakpoints,o.columnSpacing,(n,a)=>{const s=typeof a=="string"?a:e.spacing?.(a);n(r,{[oe("column")]:s,"> *":{[se("column")]:s}})}),r},Xe=({theme:e,ownerState:o})=>{if(!o.container)return{};const r={};return P(e.breakpoints,o.direction,(n,a)=>{n(r,{flexDirection:a})}),r},Ye=({ownerState:e})=>({minWidth:0,boxSizing:"border-box",...e.container&&{display:"flex",flexWrap:"wrap",...e.wrap&&e.wrap!=="wrap"&&{flexWrap:e.wrap},gap:`var(${oe("row")}) var(${oe("column")})`}}),et=e=>{const o=[];return Object.entries(e).forEach(([r,n])=>{n!==!1&&n!==void 0&&o.push(`grid-${r}-${String(n)}`)}),o},tt=(e,o="xs")=>{function r(n){return n===void 0?!1:typeof n=="string"&&!Number.isNaN(Number(n))||typeof n=="number"&&n>0}if(r(e))return[`spacing-${o}-${String(e)}`];if(typeof e=="object"&&!Array.isArray(e)){const n=[];return Object.entries(e).forEach(([a,s])=>{r(s)&&n.push(`spacing-${a}-${String(s)}`)}),n}return[]},ot=e=>e===void 0?[]:typeof e=="object"?Object.entries(e).map(([o,r])=>`direction-${o}-${r}`):[`direction-xs-${String(e)}`];function rt(e,o){e.item!==void 0&&delete e.item,e.zeroMinWidth!==void 0&&delete e.zeroMinWidth,o.keys.forEach(r=>{e[r]!==void 0&&delete e[r]})}const nt=ze(),at=De("div",{name:"MuiGrid",slot:"Root"});function st(e){return Ae({props:e,name:"MuiGrid",defaultTheme:nt})}function lt(e={}){const{createStyledComponent:o=at,useThemeProps:r=st,useTheme:n=Oe,componentName:a="MuiGrid"}=e,s=(m,d)=>{const{container:f,direction:l,spacing:u,wrap:p,size:v}=m,y={root:["root",f&&"container",p!=="wrap"&&`wrap-xs-${String(p)}`,...ot(l),...et(v),...f?tt(u,d.breakpoints.keys[0]):[]]};return ne(y,I=>ae(a,I),{})};function i(m,d,f=()=>!0){const l={};return m===null||(Array.isArray(m)?m.forEach((u,p)=>{u!==null&&f(u)&&d.keys[p]&&(l[d.keys[p]]=u)}):typeof m=="object"?Object.keys(m).forEach(u=>{const p=m[u];p!=null&&f(p)&&(l[u]=p)}):l[d.keys[0]]=m),l}const h=o(Ze,Qe,Je,Ke,Xe,Ye,He),x=c.forwardRef(function(d,f){const l=n(),u=r(d),p=Pe(u);rt(p,l.breakpoints);const{className:v,children:y,columns:I=12,container:g=!1,component:G="div",direction:z="row",wrap:Q="wrap",size:w={},offset:M={},spacing:A=0,rowSpacing:$=A,columnSpacing:_=A,unstable_level:S=0,...le}=p,X=i(w,l.breakpoints,j=>j!==!1),Y=i(M,l.breakpoints),ee=d.columns??(S?void 0:I),Ie=d.spacing??(S?void 0:A),Ge=d.rowSpacing??d.spacing??(S?void 0:$),we=d.columnSpacing??d.spacing??(S?void 0:_),xe={...p,level:S,columns:ee,container:g,direction:z,wrap:Q,spacing:Ie,rowSpacing:Ge,columnSpacing:we,size:X,offset:Y},Fe=s(xe,l);return t.jsx(h,{ref:f,as:G,ownerState:xe,className:re(Fe.root,v),...le,children:c.Children.map(y,j=>c.isValidElement(j)&&$e(j,["Grid"])&&g&&j.props.container?c.cloneElement(j,{unstable_level:j.props?.unstable_level??S+1}):j)})});return x.muiName="Grid",x}function it(e){return ae("MuiFormGroup",e)}me("MuiFormGroup",["root","row","error"]);const ct=e=>{const{classes:o,row:r,error:n}=e;return ne({root:["root",r&&"row",n&&"error"]},it,o)},ut=O("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:r}=e;return[o.root,r.row&&o.row]}})({display:"flex",flexDirection:"column",flexWrap:"wrap",variants:[{props:{row:!0},style:{flexDirection:"row"}}]}),he=c.forwardRef(function(o,r){const n=ce({props:o,name:"MuiFormGroup"}),{className:a,row:s=!1,...i}=n,h=Ce(),x=_e({props:n,muiFormControl:h,states:["error"]}),m={...n,row:s,error:x.error},d=ct(m);return t.jsx(ut,{className:re(d.root,a),ownerState:m,ref:r,...i})}),k=lt({createStyledComponent:O("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:r}=e;return[o.root,r.container&&o.container]}}),componentName:"MuiGrid",useThemeProps:e=>ce({props:e,name:"MuiGrid"}),useTheme:qe}),dt=Se(t.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"})),pt=Se(t.jsx("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"})),mt=O("span",{name:"MuiRadioButtonIcon",shouldForwardProp:ve})({position:"relative",display:"flex"}),ht=O(dt,{name:"MuiRadioButtonIcon"})({transform:"scale(1)"}),xt=O(pt,{name:"MuiRadioButtonIcon"})(ye(({theme:e})=>({left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest}),variants:[{props:{checked:!0},style:{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}}]})));function je(e){const{checked:o=!1,classes:r={},fontSize:n}=e,a={...e,checked:o};return t.jsxs(mt,{className:r.root,ownerState:a,children:[t.jsx(ht,{fontSize:n,className:r.background,ownerState:a}),t.jsx(xt,{fontSize:n,className:r.dot,ownerState:a})]})}const ke=c.createContext(void 0);function ft(){return c.useContext(ke)}function gt(e){return ae("MuiRadio",e)}const be=me("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary","sizeSmall"]),bt=e=>{const{classes:o,color:r,size:n}=e,a={root:["root",`color${te(r)}`,n!=="medium"&&`size${te(n)}`]};return{...o,...ne(a,gt,o)}},Ct=O(Ne,{shouldForwardProp:e=>ve(e)||e==="classes",name:"MuiRadio",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:r}=e;return[o.root,r.size!=="medium"&&o[`size${te(r.size)}`],o[`color${te(r.color)}`]]}})(ye(({theme:e})=>({color:(e.vars||e).palette.text.secondary,[`&.${be.disabled}`]:{color:(e.vars||e).palette.action.disabled},variants:[{props:{color:"default",disabled:!1,disableRipple:!1},style:{"&:hover":{backgroundColor:e.alpha((e.vars||e).palette.action.active,(e.vars||e).palette.action.hoverOpacity)}}},...Object.entries(e.palette).filter(fe()).map(([o])=>({props:{color:o,disabled:!1,disableRipple:!1},style:{"&:hover":{backgroundColor:e.alpha((e.vars||e).palette[o].main,(e.vars||e).palette.action.hoverOpacity)}}})),...Object.entries(e.palette).filter(fe()).map(([o])=>({props:{color:o,disabled:!1},style:{[`&.${be.checked}`]:{color:(e.vars||e).palette[o].main}}})),{props:{disableRipple:!1},style:{"&:hover":{"@media (hover: none)":{backgroundColor:"transparent"}}}}]})));function vt(e,o){return typeof o=="object"&&o!==null?e===o:String(e)===String(o)}const yt=t.jsx(je,{checked:!0}),St=t.jsx(je,{}),K=c.forwardRef(function(o,r){const n=ce({props:o,name:"MuiRadio"}),{checked:a,checkedIcon:s=yt,color:i="primary",icon:h=St,name:x,onChange:m,size:d="medium",className:f,disabled:l,disableRipple:u=!1,slots:p={},slotProps:v={},inputProps:y,...I}=n,g=Ce();let G=l;g&&typeof G>"u"&&(G=g.disabled),G??=!1;const z={...n,disabled:G,disableRipple:u,color:i,size:d},Q=bt(z),w=ft();let M=a;const A=We(m,w&&w.onChange);let $=x;w&&(typeof M>"u"&&(M=vt(w.value,n.value)),typeof $>"u"&&($=w.name));const _=v.input??y,[S,le]=Le("root",{ref:r,elementType:Ct,className:re(Q.root,f),shouldForwardComponentProp:!0,externalForwardedProps:{slots:p,slotProps:v,...I},getSlotProps:X=>({...X,onChange:(Y,...ee)=>{X.onChange?.(Y,...ee),A(Y,...ee)}}),ownerState:z,additionalProps:{type:"radio",icon:c.cloneElement(h,{fontSize:h.props.fontSize??d}),checkedIcon:c.cloneElement(s,{fontSize:s.props.fontSize??d}),disabled:G,name:$,checked:M,slots:p,slotProps:{input:typeof _=="function"?_(z):_}}});return t.jsx(S,{...le,classes:Q})});function jt(e){return ae("MuiRadioGroup",e)}me("MuiRadioGroup",["root","row","error"]);const kt=e=>{const{classes:o,row:r,error:n}=e;return ne({root:["root",r&&"row",n&&"error"]},jt,o)},Re=c.forwardRef(function(o,r){const{actions:n,children:a,className:s,defaultValue:i,name:h,onChange:x,value:m,...d}=o,f=c.useRef(null),l=kt(o),[u,p]=Be({controlled:m,default:i,name:"RadioGroup"});c.useImperativeHandle(n,()=>({focus:()=>{let g=f.current.querySelector("input:not(:disabled):checked");g||(g=f.current.querySelector("input:not(:disabled)")),g&&g.focus()}}),[]);const v=Ve(r,f),y=Me(h),I=c.useMemo(()=>({name:y,onChange(g){p(g.target.value),x&&x(g,g.target.value)},value:u}),[y,x,p,u]);return t.jsx(ke.Provider,{value:I,children:t.jsx(he,{role:"radiogroup",ref:v,className:re(l.root,s),...d,children:a})})}),qt={title:"Components/Inputs"},J=["Tokyo","Osaka","Kyoto","Nagoya","Sapporo"],Te=["Admin","Editor","Viewer"],N=()=>{const[e,o]=c.useState(null),[r,n]=c.useState(""),[a,s]=c.useState({a:!0,b:!1}),[i,h]=c.useState("opt1"),[x,m]=c.useState(""),[d,f]=c.useState([]);return t.jsxs(T,{variant:"card",children:[t.jsx(ue,{variant:"h6",children:"Inputs"}),t.jsxs(ie,{direction:"column",spacing:2,children:[t.jsx(b,{label:"Text",placeholder:"Type something",value:x,onChange:l=>m(l.target.value),fullWidth:!0}),t.jsxs(H,{fullWidth:!0,children:[t.jsx(de,{id:"role-label",children:"Role"}),t.jsx(pe,{labelId:"role-label",label:"Role",value:r,onChange:l=>n(l.target.value),children:Te.map(l=>t.jsx(U,{value:l,children:l},l))})]}),t.jsx(Z,{value:e,onChange:(l,u)=>o(u),options:J,renderInput:l=>t.jsx(b,{...l,label:"Autocomplete",fullWidth:!0})}),t.jsx(ie,{direction:"column",spacing:2,children:t.jsx(Z,{multiple:!0,disableCloseOnSelect:!0,options:J,value:d,onChange:(l,u)=>f(u),isOptionEqualToValue:(l,u)=>l===u,renderOption:(l,u,{selected:p})=>t.jsxs("li",{...l,children:[t.jsx(R,{checked:p}),u]}),renderInput:l=>t.jsx(b,{...l,label:"Autocomplete Multiple",placeholder:"Select cities"})})}),t.jsxs(he,{children:[t.jsx(C,{control:t.jsx(R,{checked:a.a,onChange:l=>s(u=>({...u,a:l.target.checked}))}),label:"Checkbox A"}),t.jsx(C,{control:t.jsx(R,{checked:a.b,onChange:l=>s(u=>({...u,b:l.target.checked}))}),label:"Checkbox B"}),t.jsx(C,{label:"Required (disabled)",control:t.jsx(R,{checked:!0,disabled:!0})})]}),t.jsx(H,{children:t.jsxs(Re,{value:i,onChange:l=>h(l.target.value),name:"radio-demo",children:[t.jsx(C,{value:"opt1",control:t.jsx(K,{}),label:"Option 1"}),t.jsx(C,{value:"opt2",control:t.jsx(K,{}),label:"Option 2"}),t.jsx(C,{value:"opt3",control:t.jsx(K,{}),label:"Option 3"})]})}),t.jsx(Ee,{variant:"contained",children:"Submit"})]})]})},B=()=>{const[e,o]=c.useState(""),[r,n]=c.useState(""),[a,s]=c.useState(null);return t.jsxs(T,{variant:"card",children:[t.jsx(ue,{variant:"h6",children:"Squeezed Inputs"}),t.jsxs(k,{container:!0,columns:8,spacing:2,wrap:"nowrap",alignItems:"center",children:[t.jsx(k,{item:!0,xs:1,children:t.jsx(b,{size:"small",label:"Text",value:e,onChange:i=>o(i.target.value)})}),t.jsx(k,{item:!0,xs:1,children:t.jsx(b,{size:"small",label:"Text",value:e,onChange:i=>o(i.target.value)})})," ",t.jsx(k,{item:!0,xs:1,children:t.jsx(b,{size:"small",label:"Text",value:e,onChange:i=>o(i.target.value)})})," ",t.jsx(k,{item:!0,xs:1,children:t.jsx(b,{size:"small",label:"Text",value:e,onChange:i=>o(i.target.value)})})," ",t.jsx(k,{item:!0,xs:1,children:t.jsx(b,{size:"small",label:"Text",value:e,onChange:i=>o(i.target.value)})}),t.jsxs(k,{item:!0,xs:2,children:[" ",t.jsxs(H,{size:"small",fullWidth:!0,children:[t.jsx(de,{id:"role-label",children:"Role"}),t.jsx(pe,{id:"role",labelId:"role-label",label:"Role",value:r,onChange:i=>n(i.target.value),children:Te.map(i=>t.jsx(U,{value:i,children:i},i))})]})]}),t.jsx(k,{item:!0,xs:1,children:t.jsx(Z,{size:"small",options:J,value:a,onChange:(i,h)=>s(h),renderInput:i=>t.jsx(b,{...i,label:"City"})})})]})]})},V=()=>t.jsx(T,{variant:"card",children:t.jsx(b,{label:"Text",placeholder:"Type something",fullWidth:!0})}),L=()=>{const[e,o]=c.useState("");return t.jsx(T,{variant:"card",children:t.jsxs(H,{fullWidth:!0,children:[t.jsx(de,{id:"dd-label",children:"Select"}),t.jsxs(pe,{labelId:"dd-label",label:"Select",value:e,onChange:r=>o(r.target.value),children:[t.jsx(U,{value:"one",children:"One"}),t.jsx(U,{value:"two",children:"Two"}),t.jsx(U,{value:"three",children:"Three"})]})]})})},W=()=>{const[e,o]=c.useState(null);return t.jsx(T,{variant:"card",children:t.jsx(Z,{value:e,onChange:(r,n)=>o(n),options:J,renderInput:r=>t.jsx(b,{...r,label:"Autocomplete",fullWidth:!0})})})},E=()=>{const[e,o]=c.useState([]);return t.jsxs(T,{variant:"card",children:[t.jsx(ue,{variant:"h6",children:"Autocomplete (multiple)"}),t.jsx(ie,{direction:"column",spacing:2,children:t.jsx(Z,{multiple:!0,disableCloseOnSelect:!0,options:J,value:e,onChange:(r,n)=>o(n),isOptionEqualToValue:(r,n)=>r===n,renderOption:(r,n,{selected:a})=>t.jsxs("li",{...r,children:[t.jsx(R,{checked:a}),n]}),renderInput:r=>t.jsx(b,{...r,label:"Cities",placeholder:"Select cities"})})})]})},q=()=>{const[e,o]=c.useState({a:!1,b:!0});return t.jsx(T,{variant:"card",children:t.jsxs(he,{children:[t.jsx(C,{control:t.jsx(R,{checked:e.a,onChange:r=>o(n=>({...n,a:r.target.checked}))}),label:"A"}),t.jsx(C,{control:t.jsx(R,{checked:e.b,onChange:r=>o(n=>({...n,b:r.target.checked}))}),label:"B"}),t.jsx(C,{label:"Required (disabled)",control:t.jsx(R,{checked:!0,disabled:!0})})]})})},D=()=>{const[e,o]=c.useState("1");return t.jsx(T,{variant:"card",children:t.jsx(H,{children:t.jsxs(Re,{value:e,onChange:r=>o(r.target.value),children:[t.jsx(C,{value:"1",control:t.jsx(K,{}),label:"One"}),t.jsx(C,{value:"2",control:t.jsx(K,{}),label:"Two"})]})})})};N.__docgenInfo={description:"",methods:[],displayName:"AllControls"};B.__docgenInfo={description:"",methods:[],displayName:"SqueezedInputs"};V.__docgenInfo={description:"",methods:[],displayName:"TextOnly"};L.__docgenInfo={description:"",methods:[],displayName:"DropdownOnly"};W.__docgenInfo={description:"",methods:[],displayName:"AutocompleteOnly"};E.__docgenInfo={description:"",methods:[],displayName:"AutocompleteMultiple"};q.__docgenInfo={description:"",methods:[],displayName:"CheckboxesOnly"};D.__docgenInfo={description:"",methods:[],displayName:"RadiosOnly"};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
  const [city, setCity] = useState(null);
  const [role, setRole] = useState("");
  const [checked, setChecked] = useState({
    a: true,
    b: false
  });
  const [radio, setRadio] = useState("opt1");
  const [text, setText] = useState("");
  const [value, setValue] = useState([]);
  return <Paper variant="card">\r
      <Typography variant="h6">Inputs</Typography>\r
\r
      {/* layout uses Stack spacing prop (no sx) */}\r
      <Stack direction="column" spacing={2}>\r
        {/* Text */}\r
        <TextField label="Text" placeholder="Type something" value={text} onChange={e => setText(e.target.value)} fullWidth />\r
\r
        {/* Dropdown (Select) */}\r
        <FormControl fullWidth>\r
          <InputLabel id="role-label">Role</InputLabel>\r
          <Select labelId="role-label" label="Role" value={role} onChange={e => setRole(e.target.value)}>\r
            {roles.map(r => <MenuItem key={r} value={r}>\r
                {r}\r
              </MenuItem>)}\r
          </Select>\r
        </FormControl>\r
\r
        {/* Autocomplete */}\r
        <Autocomplete value={city} onChange={(_, v) => setCity(v)} options={cities} renderInput={params => <TextField {...params} label="Autocomplete" fullWidth />} />\r
        <Stack direction="column" spacing={2}>\r
          <Autocomplete multiple disableCloseOnSelect options={cities} value={value} onChange={(_, v) => setValue(v)} isOptionEqualToValue={(o, v) => o === v} renderOption={(props, option, {
          selected
        }) => <li {...props}>\r
                <Checkbox checked={selected} />\r
                {option}\r
              </li>} renderInput={params => <TextField {...params} label="Autocomplete Multiple" placeholder="Select cities" />} />\r
        </Stack>\r
\r
        {/* Checkboxes */}\r
        <FormGroup>\r
          <FormControlLabel control={<Checkbox checked={checked.a} onChange={e => setChecked(s => ({
          ...s,
          a: e.target.checked
        }))} />} label="Checkbox A" />\r
          <FormControlLabel control={<Checkbox checked={checked.b} onChange={e => setChecked(s => ({
          ...s,
          b: e.target.checked
        }))} />} label="Checkbox B" />\r
          <FormControlLabel label="Required (disabled)" control={<Checkbox checked disabled />} />\r
        </FormGroup>\r
\r
        {/* Radios */}\r
        <FormControl>\r
          <RadioGroup value={radio} onChange={e => setRadio(e.target.value)} name="radio-demo">\r
            <FormControlLabel value="opt1" control={<Radio />} label="Option 1" />\r
            <FormControlLabel value="opt2" control={<Radio />} label="Option 2" />\r
            <FormControlLabel value="opt3" control={<Radio />} label="Option 3" />\r
          </RadioGroup>\r
        </FormControl>\r
\r
        <Button variant="contained">Submit</Button>\r
      </Stack>\r
    </Paper>;
}`,...N.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  const [text, setText] = useState("");
  const [role, setRole] = useState("");
  const [city, setCity] = useState(null);
  return <Paper variant="card">\r
      <Typography variant="h6">Squeezed Inputs</Typography>\r
\r
      {/* 8 inputs side-by-side; no sx, no styled */}\r
      <Grid container columns={8} spacing={2} wrap="nowrap" alignItems="center">\r
        <Grid item xs={1}>\r
          <TextField size="small" label="Text" value={text} onChange={e => setText(e.target.value)} />\r
        </Grid>\r
        <Grid item xs={1}>\r
          <TextField size="small" label="Text" value={text} onChange={e => setText(e.target.value)} />\r
        </Grid>{" "}\r
        <Grid item xs={1}>\r
          <TextField size="small" label="Text" value={text} onChange={e => setText(e.target.value)} />\r
        </Grid>{" "}\r
        <Grid item xs={1}>\r
          <TextField size="small" label="Text" value={text} onChange={e => setText(e.target.value)} />\r
        </Grid>{" "}\r
        <Grid item xs={1}>\r
          <TextField size="small" label="Text" value={text} onChange={e => setText(e.target.value)} />\r
        </Grid>\r
        <Grid item xs={2}>\r
          {" "}\r
          {/* was xs={1} */}\r
          <FormControl size="small" fullWidth>\r
            <InputLabel id="role-label">Role</InputLabel>\r
            <Select id="role" labelId="role-label" label="Role" value={role} onChange={e => setRole(e.target.value)}>\r
              {roles.map(r => <MenuItem key={r} value={r}>\r
                  {r}\r
                </MenuItem>)}\r
            </Select>\r
          </FormControl>\r
        </Grid>\r
        <Grid item xs={1}>\r
          <Autocomplete size="small" options={cities} value={city} onChange={(_, v) => setCity(v)} renderInput={params => <TextField {...params} label="City" />} />\r
        </Grid>\r
      </Grid>\r
    </Paper>;
}`,...B.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => <Paper variant="card">\r
    <TextField label="Text" placeholder="Type something" fullWidth />\r
  </Paper>`,...V.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
  const [val, setVal] = useState("");
  return <Paper variant="card">\r
      <FormControl fullWidth>\r
        <InputLabel id="dd-label">Select</InputLabel>\r
        <Select labelId="dd-label" label="Select" value={val} onChange={e => setVal(e.target.value)}>\r
          <MenuItem value="one">One</MenuItem>\r
          <MenuItem value="two">Two</MenuItem>\r
          <MenuItem value="three">Three</MenuItem>\r
        </Select>\r
      </FormControl>\r
    </Paper>;
}`,...L.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
  const [val, setVal] = useState(null);
  return <Paper variant="card">\r
      <Autocomplete value={val} onChange={(_, v) => setVal(v)} options={cities} renderInput={params => <TextField {...params} label="Autocomplete" fullWidth />} />\r
    </Paper>;
}`,...W.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState([]);
  return <Paper variant="card">\r
      <Typography variant="h6">Autocomplete (multiple)</Typography>\r
      <Stack direction="column" spacing={2}>\r
        <Autocomplete multiple disableCloseOnSelect options={cities} value={value} onChange={(_, v) => setValue(v)} isOptionEqualToValue={(o, v) => o === v} renderOption={(props, option, {
        selected
      }) => <li {...props}>\r
              <Checkbox checked={selected} />\r
              {option}\r
            </li>} renderInput={params => <TextField {...params} label="Cities" placeholder="Select cities" />} />\r
      </Stack>\r
    </Paper>;
}`,...E.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
  const [state, setState] = useState({
    a: false,
    b: true
  });
  return <Paper variant="card">\r
      <FormGroup>\r
        <FormControlLabel control={<Checkbox checked={state.a} onChange={e => setState(s => ({
        ...s,
        a: e.target.checked
      }))} />} label="A" />\r
        <FormControlLabel control={<Checkbox checked={state.b} onChange={e => setState(s => ({
        ...s,
        b: e.target.checked
      }))} />} label="B" />\r
        <FormControlLabel label="Required (disabled)" control={<Checkbox checked disabled />} />\r
      </FormGroup>\r
    </Paper>;
}`,...q.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
  const [val, setVal] = useState("1");
  return <Paper variant="card">\r
      <FormControl>\r
        <RadioGroup value={val} onChange={e => setVal(e.target.value)}>\r
          <FormControlLabel value="1" control={<Radio />} label="One" />\r
          <FormControlLabel value="2" control={<Radio />} label="Two" />\r
        </RadioGroup>\r
      </FormControl>\r
    </Paper>;
}`,...D.parameters?.docs?.source}}};const Dt=["AllControls","SqueezedInputs","TextOnly","DropdownOnly","AutocompleteOnly","AutocompleteMultiple","CheckboxesOnly","RadiosOnly"];export{N as AllControls,E as AutocompleteMultiple,W as AutocompleteOnly,q as CheckboxesOnly,L as DropdownOnly,D as RadiosOnly,B as SqueezedInputs,V as TextOnly,Dt as __namedExportsOrder,qt as default};
