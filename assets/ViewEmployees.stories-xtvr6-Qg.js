import{o as l,j as e}from"./iframe-CkTs3eTz.js";import{B as i}from"./Box-B8azb6oa.js";import{P as B}from"./Paper-Cu2WgBAQ.js";import{T as b}from"./Typography-CRj5WkeB.js";import{F as o,S as d,T as r}from"./TextField-DlXBpUWV.js";import{M as a}from"./MenuItem-DenTbWrP.js";import{L as G}from"./FormControlLabel-CYo06a1C.js";import{B as Y}from"./Button-BSpwk4rG.js";import{D as w}from"./DataGrid-CrGN2mGT.js";import"./preload-helper-D9Z9MdNV.js";import"./createSimplePaletteValueFilter-DQpw-qH5.js";import"./useTheme-DajQEPpF.js";import"./useSlot-BSX8bjL_.js";import"./mergeSlotProps-ChR5R7rd.js";import"./ButtonBase-DowNzL_u.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./useSlotProps-CTPqvCqN.js";import"./Grow-Bep7KA8V.js";import"./getReactElementRef-5MRyPtE6.js";import"./index-rmtliNu4.js";import"./Modal-DnABQv_T.js";import"./createSvgIcon-C9iwLWcC.js";import"./dividerClasses-BB5fxIZS.js";import"./Close-CNRUZ3DU.js";import"./Chip-BdyMt7Cc.js";import"./IconButton-DfVMvn7J.js";import"./getThemeProps-B9ZzK8jZ.js";import"./Checkbox-CAuJn01g.js";import"./ListItemText-QZ2p9NTM.js";import"./Divider-0TrSOOP_.js";import"./KeyboardArrowRight-DYyPzXVF.js";import"./ClickAwayListener-C7en22qL.js";import"./InputAdornment-D0iqF54e.js";const Te={title:"Screens/View Employees",parameters:{layout:"fullscreen"}},O=[{SiteID:0,SiteName:"Any"},{SiteID:1,SiteName:"Manila"},{SiteID:2,SiteName:"Cebu"},{SiteID:3,SiteName:"Clark"}],_={"Department / Accounts":[{id:"d-ops",label:"Operations"},{id:"d-hr",label:"HR"},{id:"c-acme",label:"Acme Corp"},{id:"c-globex",label:"Globex"}]},V=[{id:"1-1001",employeeid:1,hrisemployeeid:"1001",fullname:"Alice Smith",clientname:"Acme Corp",jobdescription:"UI Designer",sitename:"Manila",employeeterm:"Full-time",employeelevel:"L2"}],$=[{field:"hrisemployeeid",headerName:"Emp ID",minWidth:90,flex:1},{field:"fullname",headerName:"Full name",minWidth:200,flex:1},{field:"clientname",headerName:"Client Name",minWidth:150,flex:1},{field:"jobdescription",headerName:"Position Title",minWidth:150,flex:1},{field:"sitename",headerName:"Site",minWidth:120,flex:1},{field:"employeeterm",headerName:"Employment Term",minWidth:150,flex:1},{field:"employeelevel",headerName:"Job Level",minWidth:120,flex:1}],n=({span:m=1,label:u,labelId:p,htmlFor:c,children:h})=>e.jsxs(i,{sx:{gridColumn:`span ${m}`},children:[e.jsx(b,{id:p,htmlFor:c,variant:"formLabel",component:"label",children:u}),h]}),s=()=>{const[m,u]=l.useState(0),[p,c]=l.useState("Any-"),[h,x]=l.useState(""),[v,y]=l.useState("Yes"),[F,g]=l.useState(""),[S,I]=l.useState(""),[j,C]=l.useState(""),[E,T]=l.useState(""),[W,D]=l.useState(""),[z,N]=l.useState("No"),[A,M]=l.useState(""),[L,P]=l.useState(""),R=t=>t.preventDefault();return e.jsx(i,{sx:{p:2},children:e.jsxs(B,{elevation:6,sx:{p:2},children:[e.jsx(b,{variant:"h6",sx:{mb:1},children:"Employee Management"}),e.jsxs(i,{component:"form",onSubmit:R,noValidate:!0,sx:{display:"grid",gridTemplateColumns:"repeat(12, minmax(0, 1fr))",columnGap:1,rowGap:1.5},children:[e.jsx(n,{span:2,label:"Site",labelId:"lbl-site",htmlFor:"fld-site",children:e.jsx(o,{fullWidth:!0,size:"small",children:e.jsx(d,{id:"fld-site","aria-labelledby":"lbl-site",value:m,onChange:t=>u(t.target.value),children:O.map(t=>e.jsx(a,{value:t.SiteID,children:t.SiteName},t.SiteID))})})}),e.jsx(n,{span:3,label:"Department / Accounts",labelId:"lbl-group",htmlFor:"fld-group",children:e.jsx(o,{fullWidth:!0,size:"small",children:e.jsxs(d,{id:"fld-group","aria-labelledby":"lbl-group",value:p,onChange:t=>c(t.target.value),children:[e.jsx(a,{value:"Any-",children:"Any"}),Object.entries(_).map(([t,k])=>[e.jsx(G,{children:t},`${t}-hdr`),k.map(f=>e.jsx(a,{value:f.id,children:f.label},f.id))])]})})}),e.jsx(n,{span:2,label:"Position Title",labelId:"lbl-pos",htmlFor:"fld-pos",children:e.jsx(r,{id:"fld-pos",size:"small",fullWidth:!0,placeholder:"Position title",value:h,onChange:t=>x(t.target.value)})}),e.jsx(n,{span:1,label:"Active",labelId:"lbl-active",htmlFor:"fld-active",children:e.jsx(o,{fullWidth:!0,size:"small",children:e.jsxs(d,{id:"fld-active","aria-labelledby":"lbl-active",value:v,onChange:t=>y(t.target.value),children:[e.jsx(a,{value:"Any",children:"Any"}),e.jsx(a,{value:"Yes",children:"Yes"}),e.jsx(a,{value:"No",children:"No"})]})})}),e.jsx(n,{span:2,label:"Employment Start (From)",htmlFor:"fld-start-from",children:e.jsx(r,{id:"fld-start-from",type:"date",size:"small",fullWidth:!0,value:F,onChange:t=>g(t.target.value),InputLabelProps:{shrink:!0}})}),e.jsx(n,{span:2,label:"Employment Start (To)",htmlFor:"fld-start-to",children:e.jsx(r,{id:"fld-start-to",type:"date",size:"small",fullWidth:!0,value:S,onChange:t=>I(t.target.value),InputLabelProps:{shrink:!0}})}),e.jsx(n,{span:2,label:"Emp ID",htmlFor:"fld-empid",children:e.jsx(r,{id:"fld-empid",size:"small",fullWidth:!0,placeholder:"Emp ID",value:j,onChange:t=>C(t.target.value)})}),e.jsx(n,{span:3,label:"Employee First Name",htmlFor:"fld-first",children:e.jsx(r,{id:"fld-first",size:"small",fullWidth:!0,placeholder:"First name",value:E,onChange:t=>T(t.target.value)})}),e.jsx(n,{span:2,label:"Employee Last Name",htmlFor:"fld-last",children:e.jsx(r,{id:"fld-last",size:"small",fullWidth:!0,placeholder:"Last name",value:W,onChange:t=>D(t.target.value)})}),e.jsx(n,{span:1,label:"Dummy?",labelId:"lbl-dummy",htmlFor:"fld-dummy",children:e.jsx(o,{fullWidth:!0,size:"small",children:e.jsxs(d,{id:"fld-dummy","aria-labelledby":"lbl-dummy",value:z,onChange:t=>N(t.target.value),children:[e.jsx(a,{value:"Any",children:"Any"}),e.jsx(a,{value:"Yes",children:"Yes"}),e.jsx(a,{value:"No",children:"No"})]})})}),e.jsx(n,{span:2,label:"Employment End Date",htmlFor:"fld-end-from",children:e.jsx(r,{id:"fld-end-from",type:"date",size:"small",fullWidth:!0,value:A,onChange:t=>M(t.target.value),InputLabelProps:{shrink:!0}})}),e.jsx(n,{span:1,label:"Employment End (To)",htmlFor:"fld-end-to",children:e.jsx(r,{id:"fld-end-to",type:"date",size:"small",fullWidth:!0,value:L,onChange:t=>P(t.target.value),InputLabelProps:{shrink:!0}})}),e.jsx(i,{sx:{gridColumn:"span 1",display:"flex",alignItems:"end",justifyContent:"flex-end"},children:e.jsx(Y,{type:"submit",variant:"contained",size:"small",sx:{minWidth:120},children:"Search"})})]}),e.jsx(i,{sx:{mt:2},children:e.jsx(w,{density:"compact",rows:V,columns:$,pageSizeOptions:[10,25,50],initialState:{pagination:{paginationModel:{pageSize:10}}},disableRowSelectionOnClick:!0})})]})})};s.__docgenInfo={description:"",methods:[],displayName:"Design"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  // state purely for visuals
  const [site, setSite] = React.useState(0);
  const [group, setGroup] = React.useState("Any-");
  const [position, setPosition] = React.useState("");
  const [active, setActive] = React.useState("Yes");
  const [startFrom, setStartFrom] = React.useState("");
  const [startTo, setStartTo] = React.useState("");
  const [empId, setEmpId] = React.useState("");
  const [first, setFirst] = React.useState("");
  const [last, setLast] = React.useState("");
  const [dummy, setDummy] = React.useState("No");
  const [endFrom, setEndFrom] = React.useState("");
  const [endTo, setEndTo] = React.useState("");
  const onSubmit = e => e.preventDefault();
  return <Box sx={{
    p: 2
  }}>\r
      <Paper elevation={6} sx={{
      p: 2
    }}>\r
        <Typography variant="h6" sx={{
        mb: 1
      }}>\r
          Employee Management\r
        </Typography>\r
\r
        <Box component="form" onSubmit={onSubmit} noValidate sx={{
        display: "grid",
        gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
        columnGap: 1,
        rowGap: 1.5
      }}>\r
          <Field span={2} label="Site" labelId="lbl-site" htmlFor="fld-site">\r
            <FormControl fullWidth size="small">\r
              <Select id="fld-site" aria-labelledby="lbl-site" value={site} onChange={e => setSite(e.target.value)}>\r
                {sites.map(s => <MenuItem key={s.SiteID} value={s.SiteID}>\r
                    {s.SiteName}\r
                  </MenuItem>)}\r
              </Select>\r
            </FormControl>\r
          </Field>\r
\r
          <Field span={3} label="Department / Accounts" labelId="lbl-group" htmlFor="fld-group">\r
            <FormControl fullWidth size="small">\r
              <Select id="fld-group" aria-labelledby="lbl-group" value={group} onChange={e => setGroup(e.target.value)}>\r
                <MenuItem value="Any-">Any</MenuItem>\r
                {Object.entries(groups).map(([hdr, items]) => [<ListSubheader key={\`\${hdr}-hdr\`}>{hdr}</ListSubheader>, items.map(i => <MenuItem key={i.id} value={i.id}>\r
                      {i.label}\r
                    </MenuItem>)])}\r
              </Select>\r
            </FormControl>\r
          </Field>\r
\r
          <Field span={2} label="Position Title" labelId="lbl-pos" htmlFor="fld-pos">\r
            <TextField id="fld-pos" size="small" fullWidth placeholder="Position title" value={position} onChange={e => setPosition(e.target.value)} />\r
          </Field>\r
\r
          <Field span={1} label="Active" labelId="lbl-active" htmlFor="fld-active">\r
            <FormControl fullWidth size="small">\r
              <Select id="fld-active" aria-labelledby="lbl-active" value={active} onChange={e => setActive(e.target.value)}>\r
                <MenuItem value="Any">Any</MenuItem>\r
                <MenuItem value="Yes">Yes</MenuItem>\r
                <MenuItem value="No">No</MenuItem>\r
              </Select>\r
            </FormControl>\r
          </Field>\r
\r
          <Field span={2} label="Employment Start (From)" htmlFor="fld-start-from">\r
            <TextField id="fld-start-from" type="date" size="small" fullWidth value={startFrom} onChange={e => setStartFrom(e.target.value)} InputLabelProps={{
            shrink: true
          }} />\r
          </Field>\r
\r
          <Field span={2} label="Employment Start (To)" htmlFor="fld-start-to">\r
            <TextField id="fld-start-to" type="date" size="small" fullWidth value={startTo} onChange={e => setStartTo(e.target.value)} InputLabelProps={{
            shrink: true
          }} />\r
          </Field>\r
\r
          <Field span={2} label="Emp ID" htmlFor="fld-empid">\r
            <TextField id="fld-empid" size="small" fullWidth placeholder="Emp ID" value={empId} onChange={e => setEmpId(e.target.value)} />\r
          </Field>\r
\r
          <Field span={3} label="Employee First Name" htmlFor="fld-first">\r
            <TextField id="fld-first" size="small" fullWidth placeholder="First name" value={first} onChange={e => setFirst(e.target.value)} />\r
          </Field>\r
\r
          <Field span={2} label="Employee Last Name" htmlFor="fld-last">\r
            <TextField id="fld-last" size="small" fullWidth placeholder="Last name" value={last} onChange={e => setLast(e.target.value)} />\r
          </Field>\r
\r
          <Field span={1} label="Dummy?" labelId="lbl-dummy" htmlFor="fld-dummy">\r
            <FormControl fullWidth size="small">\r
              <Select id="fld-dummy" aria-labelledby="lbl-dummy" value={dummy} onChange={e => setDummy(e.target.value)}>\r
                <MenuItem value="Any">Any</MenuItem>\r
                <MenuItem value="Yes">Yes</MenuItem>\r
                <MenuItem value="No">No</MenuItem>\r
              </Select>\r
            </FormControl>\r
          </Field>\r
\r
          <Field span={2} label="Employment End Date" htmlFor="fld-end-from">\r
            <TextField id="fld-end-from" type="date" size="small" fullWidth value={endFrom} onChange={e => setEndFrom(e.target.value)} InputLabelProps={{
            shrink: true
          }} />\r
          </Field>\r
\r
          <Field span={1} label="Employment End (To)" htmlFor="fld-end-to">\r
            <TextField id="fld-end-to" type="date" size="small" fullWidth value={endTo} onChange={e => setEndTo(e.target.value)} InputLabelProps={{
            shrink: true
          }} />\r
          </Field>\r
\r
          <Box sx={{
          gridColumn: "span 1",
          display: "flex",
          alignItems: "end",
          justifyContent: "flex-end"
        }}>\r
            <Button type="submit" variant="contained" size="small" sx={{
            minWidth: 120
          }}>\r
              Search\r
            </Button>\r
          </Box>\r
        </Box>\r
\r
        <Box sx={{
        mt: 2
      }}>\r
          <DataGrid density="compact" rows={rows} columns={cols} pageSizeOptions={[10, 25, 50]} initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10
            }
          }
        }} disableRowSelectionOnClick />\r
        </Box>\r
      </Paper>\r
    </Box>;
}`,...s.parameters?.docs?.source}}};const We=["Design"];export{s as Design,We as __namedExportsOrder,Te as default};
