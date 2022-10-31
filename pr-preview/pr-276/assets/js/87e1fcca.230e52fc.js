"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[5932],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),s=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=s(n),f=r,h=c["".concat(u,".").concat(f)]||c[f]||d[f]||a;return n?o.createElement(h,l(l({ref:t},p),{},{components:n})):o.createElement(h,l({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9469:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return s}});var o=n(3117),r=(n(7294),n(3905));const a={sidebar_label:"Full Storage Node"},l="Setting up a Celestia Full Storage Node",i={unversionedId:"nodes/full-storage-node",id:"nodes/full-storage-node",title:"Setting up a Celestia Full Storage Node",description:"This tutorial will guide you through setting up a Celestia Full Storage",source:"@site/docs/nodes/full-storage-node.md",sourceDirName:"nodes",slug:"/nodes/full-storage-node",permalink:"/pr-preview/pr-276/nodes/full-storage-node",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/full-storage-node.md",tags:[],version:"current",frontMatter:{sidebar_label:"Full Storage Node"},sidebar:"nodes",previous:{title:"Bridge Node",permalink:"/pr-preview/pr-276/nodes/bridge-node"},next:{title:"Light Node",permalink:"/pr-preview/pr-276/nodes/light-node"}},u={},s=[{value:"Hardware requirements",id:"hardware-requirements",level:2},{value:"Setting up your full storage node",id:"setting-up-your-full-storage-node",level:2},{value:"Setup the dependencies",id:"setup-the-dependencies",level:3},{value:"Install Celestia node",id:"install-celestia-node",level:2},{value:"Run the full storage node",id:"run-the-full-storage-node",level:3},{value:"Initialize the full storage node",id:"initialize-the-full-storage-node",level:4},{value:"Start the full storage node",id:"start-the-full-storage-node",level:4},{value:"Optional: run the full storage node with a custom key",id:"optional-run-the-full-storage-node-with-a-custom-key",level:3},{value:"Optional: start the full storage node with SystemD",id:"optional-start-the-full-storage-node-with-systemd",level:3}],p={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"setting-up-a-celestia-full-storage-node"},"Setting up a Celestia Full Storage Node"),(0,r.kt)("p",null,"This tutorial will guide you through setting up a Celestia Full Storage\nNode, which is a Celestia node that doesn't connect to Celestia App\n(hence not a full node) but stores all the data."),(0,r.kt)("h2",{id:"hardware-requirements"},"Hardware requirements"),(0,r.kt)("p",null,"The following hardware minimum requirements are recommended for running\nthe full storage node:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Memory: 8 GB RAM"),(0,r.kt)("li",{parentName:"ul"},"CPU: Quad-Core"),(0,r.kt)("li",{parentName:"ul"},"Disk: 250 GB SSD Storage"),(0,r.kt)("li",{parentName:"ul"},"Bandwidth: 1 Gbps for Download/100 Mbps for Upload")),(0,r.kt)("h2",{id:"setting-up-your-full-storage-node"},"Setting up your full storage node"),(0,r.kt)("p",null,"The following tutorial is done on an Ubuntu Linux 20.04 (LTS) x64 instance machine."),(0,r.kt)("h3",{id:"setup-the-dependencies"},"Setup the dependencies"),(0,r.kt)("p",null,"You can follow the tutorial for setting up your dependencies ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-276/developers/environment"},"here")),(0,r.kt)("h2",{id:"install-celestia-node"},"Install Celestia node"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: Make sure that you have at least 250+ Gb of free space for\nCelestia Full Storage Node")),(0,r.kt)("p",null,"You can follow the tutorial for installing Celestia Node ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-276/developers/celestia-node"},"here")),(0,r.kt)("h3",{id:"run-the-full-storage-node"},"Run the full storage node"),(0,r.kt)("h4",{id:"initialize-the-full-storage-node"},"Initialize the full storage node"),(0,r.kt)("p",null,"Run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia full init\n")),(0,r.kt)("h4",{id:"start-the-full-storage-node"},"Start the full storage node"),(0,r.kt)("p",null,"Start the Full Storage Node with a connection to a validator node's gRPC endpoint\n(which is usually exposed on port 9090):"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"NOTE: In order for access to the ability to get/submit state-related\ninformation, such as the ability to submit PayForData transactions,\nor query for the node's account balance, a gRPC endpoint of a validator\n(core) node must be passed as directed below.")),(0,r.kt)("p",null,"A note on ports:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"NOTE: The ",(0,r.kt)("inlineCode",{parentName:"p"},"--core.grpc.port")," defaults to 9090, so if you do not specify\nit in the command line, it will default to that port. You can use the flag\nto specify another port if you prefer.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia full start --core.ip http://<ip-address> --core.grpc.port <port>\n")),(0,r.kt)("p",null,"If you would like to find example RPC endpoints, check out the list of\nresources ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-276/nodes/mamaki-testnet#rpc-endpoints"},"here"),"."),(0,r.kt)("p",null,"You can create your key for your node by following the ",(0,r.kt)("inlineCode",{parentName:"p"},"cel-key")," instructions ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-276/nodes/keys"},"here")),(0,r.kt)("p",null,"Once you start the Full Node, a wallet key will be generated for you.\nYou will need to fund that address with testnet tokens to pay for\nPayForData transactions.\nYou can find the address by running the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key list --node.type full --keyring-backend test\n")),(0,r.kt)("p",null,"You have two networks to get testnet tokens from:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/pr-preview/pr-276/nodes/arabica-devnet#arabica-devnet-faucet"},"Arabica")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/pr-preview/pr-276/nodes/mamaki-testnet#mamaki-testnet-faucet"},"Mamaki"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"NOTE: If you are running a full-storage node for your sovereign\nrollup, it is highly recommended to request Arabica devnet tokens\nas Arabica has the latest changes that can be used to\ntest for developing your sovereign rollup. You can still use\nMamaki Testnet as well, it is just mostly used for Validator operations.")),(0,r.kt)("h3",{id:"optional-run-the-full-storage-node-with-a-custom-key"},"Optional: run the full storage node with a custom key"),(0,r.kt)("p",null,"In order to run a full storage node using a custom key:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The custom key must exist inside the celestia full storage node directory\nat the correct path (default: ",(0,r.kt)("inlineCode",{parentName:"li"},"~/.celestia-full/keys/keyring-test"),")"),(0,r.kt)("li",{parentName:"ol"},"The name of the custom key must be passed upon ",(0,r.kt)("inlineCode",{parentName:"li"},"start"),", like so:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia full start --core.ip http://<ip-address> --core.grpc.port <port> --keyring.accname <name-of-custom-key>\n")),(0,r.kt)("h3",{id:"optional-start-the-full-storage-node-with-systemd"},"Optional: start the full storage node with SystemD"),(0,r.kt)("p",null,"Follow the tutorial on setting up the full storage node as a background\nprocess with SystemD ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-276/nodes/systemd#celestia-full-storage-node"},"here"),"."),(0,r.kt)("p",null,"With that, you are now running a Celestia Full Storage Node."))}d.isMDXComponent=!0}}]);