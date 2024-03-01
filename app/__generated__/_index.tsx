/* eslint-disable */
/* This is a auto generated file for building the project */ 

import { Fragment, useState } from "react";
import type { Asset, FontAsset, ImageAsset, ProjectMeta } from "@webstudio-is/sdk";
import { useResource } from "@webstudio-is/react-sdk";
import type { PageMeta } from "@webstudio-is/react-sdk";
import { Body as Body, Link as Link } from "@webstudio-is/sdk-components-react-remix";
import { Box as Box, Heading as Heading, Text as Text, Paragraph as Paragraph, Image as Image, Fragment as Fragment_1, Slot as Slot, HtmlEmbed as HtmlEmbed } from "@webstudio-is/sdk-components-react";

import type { PageData } from "~/routes/_index";
export const imageAssets: ImageAsset[] = [{"id":"dbede2e6-c840-46fc-b004-47839a925727","name":"nw_AUoY32Pq2bddNKhBjn_iS.png","description":null,"projectId":"ec89b9ae-829d-4637-bbd5-6bc0d163140c","size":120409,"type":"image","format":"png","createdAt":"2024-03-01T07:44:38.666Z","meta":{"width":360,"height":360}},{"id":"61339ad7-8d7f-44be-b4cd-904faa3dcf57","name":"social_GM45VvfwMLsmZ10Md3TJX.png","description":null,"projectId":"ec89b9ae-829d-4637-bbd5-6bc0d163140c","size":461461,"type":"image","format":"png","createdAt":"2024-02-07T21:34:26.066Z","meta":{"width":1922,"height":1288}},{"id":"bfdaf959-3d2d-4850-936d-b50e49d36000","name":"adrian-infernus-GLf7bAwCdYg-unsplash_7MwisksO2l7AB6eunlQvj.jpg","description":null,"projectId":"ec89b9ae-829d-4637-bbd5-6bc0d163140c","size":371083,"type":"image","format":"jpeg","createdAt":"2023-08-15T23:47:49.909Z","meta":{"width":6109,"height":4073}},{"id":"c61b85b7-6676-44ca-a0c9-f77e569162bf","name":"mae-mu-_C5zsV_p-YI-unsplash_jRTX5H8BO4dY1hrm31iym.jpg","description":null,"projectId":"ec89b9ae-829d-4637-bbd5-6bc0d163140c","size":78671,"type":"image","format":"jpeg","createdAt":"2023-08-15T23:18:04.498Z","meta":{"width":1080,"height":1080}},{"id":"811879ea-1e0f-429e-98d1-81501a9cb170","name":"mae-mu-vbAEHCrvXZ0-unsplash_dccvaRxbJuUlVW2Xsf-UH.jpeg","description":null,"projectId":"ec89b9ae-829d-4637-bbd5-6bc0d163140c","size":223757,"type":"image","format":"jpeg","createdAt":"2023-08-11T22:21:46.193Z","meta":{"width":1920,"height":1920}},{"id":"d6d9104d-fac5-4648-a5e0-83b6166ea656","name":"annie-spratt-fbAnIjhrOL4-unsplash_g_WUh5sz3ATJfb0Kzbr9H.jpeg","description":null,"projectId":"ec89b9ae-829d-4637-bbd5-6bc0d163140c","size":221872,"type":"image","format":"jpeg","createdAt":"2023-08-11T22:21:45.941Z","meta":{"width":1920,"height":1920}},{"id":"5cad5670-b844-487c-a10b-517ab7daa59e","name":"thought-catalog-9aOswReDKPo-unsplash_bFgBgvv7ySrYRR1Co_pth.jpeg","description":null,"projectId":"ec89b9ae-829d-4637-bbd5-6bc0d163140c","size":282945,"type":"image","format":"jpeg","createdAt":"2023-08-11T22:21:45.513Z","meta":{"width":1920,"height":1920}},{"id":"70483a82-3c41-45e0-a875-d3466d4cd6f8","name":"Vimeo_KV-16X9_6PWF2kNzGKf_L4LKv_g5g.jpg","description":null,"projectId":"ec89b9ae-829d-4637-bbd5-6bc0d163140c","size":1650523,"type":"image","format":"jpeg","createdAt":"2023-08-11T06:44:36.751Z","meta":{"width":1920,"height":1080}},{"id":"4b571b71-d946-4800-b03d-849391f4c3c1","name":"tiktok_1_l-t8rAmwGMXM4QdJoUA6v.svg","description":null,"projectId":"ec89b9ae-829d-4637-bbd5-6bc0d163140c","size":1366,"type":"image","format":"svg","createdAt":"2023-08-11T06:36:27.463Z","meta":{"width":64,"height":65}},{"id":"82a4ed5d-2c04-4d13-90f5-7d59634cf321","name":"website_icon__VNN0-Jy3_EVqxGWLDLwI.svg","description":null,"projectId":"ec89b9ae-829d-4637-bbd5-6bc0d163140c","size":2762,"type":"image","format":"svg","createdAt":"2023-08-11T06:01:32.052Z","meta":{"width":65,"height":65}},{"id":"f1f484c4-4d17-4c0f-a9bd-e0da0295ecc7","name":"X_logo_taTDZ1QW30-9NKAWq7b1k.svg","description":null,"projectId":"ec89b9ae-829d-4637-bbd5-6bc0d163140c","size":361,"type":"image","format":"svg","createdAt":"2023-08-11T04:45:56.018Z","meta":{"width":65,"height":65}},{"id":"d2c8a3d5-d5fe-4f70-a6fa-89ed63e854fe","name":"Discord_Logo_2ioYUjUQU3DK-eieuxQuE.svg","description":null,"projectId":"ec89b9ae-829d-4637-bbd5-6bc0d163140c","size":1368,"type":"image","format":"svg","createdAt":"2023-08-11T04:45:55.938Z","meta":{"width":65,"height":65}},{"id":"917d77d2-ffd9-4e0b-b595-81ebb1f4b408","name":"YouTube_Logo_E5JO47S2jVM8B4_N6Jng0.svg","description":null,"projectId":"ec89b9ae-829d-4637-bbd5-6bc0d163140c","size":954,"type":"image","format":"svg","createdAt":"2023-08-11T04:45:55.928Z","meta":{"width":65,"height":65}},{"id":"d5802d35-556a-435f-b86f-019b1c36180b","name":"github_logo_7zv5xH2rHAvs3ZzbvhNed.svg","description":null,"projectId":"ec89b9ae-829d-4637-bbd5-6bc0d163140c","size":1413,"type":"image","format":"svg","createdAt":"2023-08-11T04:45:55.746Z","meta":{"width":65,"height":65}},{"id":"40545cee-1d07-45f3-a4ea-298fbc6f9b89","name":"Product_Hunt_Logo_Pmoc7iEQ6XZAYBVaZk5Xa.svg","description":null,"projectId":"ec89b9ae-829d-4637-bbd5-6bc0d163140c","size":805,"type":"image","format":"svg","createdAt":"2023-08-11T04:45:52.257Z","meta":{"width":65,"height":65}},{"id":"c9fe906a-d3ea-4be8-8dd3-9bca2bae1ff7","name":"andrew-power-y9L5-wmifaY-unsplash_bN6iKRC5zQ4xVQ4kcSInX.jpeg","description":null,"projectId":"ec89b9ae-829d-4637-bbd5-6bc0d163140c","size":363817,"type":"image","format":"jpeg","createdAt":"2023-08-11T00:17:24.438Z","meta":{"width":1920,"height":1920}},{"id":"e04b2f18-eff3-43d7-a8a5-e0fe61d8f3d3","name":"logo-icon-color_7lPMMn5N1_sztj7QUZvvx.svg","description":null,"projectId":"ec89b9ae-829d-4637-bbd5-6bc0d163140c","size":16276,"type":"image","format":"svg","createdAt":"2023-03-24T21:43:47.942Z","meta":{"width":280,"height":211}}]

// Font assets on current page (can be preloaded)
export const pageFontAssets: FontAsset[] = [{"id":"5e95f0da-7a4d-43dc-a2c4-30fe5b68f2e0","name":"BricolageGrotesque-VariableFont_opsz_wdth_wght_02oMRdjqVqw6czlsLz_3e.ttf","description":null,"projectId":"ec89b9ae-829d-4637-bbd5-6bc0d163140c","size":412808,"type":"font","createdAt":"2023-08-15T23:16:02.062Z","format":"ttf","meta":{"family":"Bricolage Grotesque","variationAxes":{"opsz":{"name":"Optical size","min":10,"default":48,"max":48},"wght":{"name":"Weight","min":200,"default":800,"max":800},"wdth":{"name":"Width","min":75,"default":75,"max":100}}}}]

export const pageBackgroundImageAssets: ImageAsset[] = []

export const pageData: PageData = {};
export const user: { email: string | null } | undefined = {"email":"warriorcarl@yahoo.com"};
export const projectId = "ec89b9ae-829d-4637-bbd5-6bc0d163140c";

export const getPageMeta = ({
  params,
  resources,
}: {
  params: Record<string, undefined | string>;
  resources: Record<string, any>;
}): PageMeta => {
  return {
    title: "Home",
    description: undefined,
    excludePageFromSearch: undefined,
    socialImageAssetId: "61339ad7-8d7f-44be-b4cd-904faa3dcf57",
    socialImageUrl: undefined,
    status: undefined,
    redirect: undefined,
    custom: [
    ],
  };
};


const Page = ({ }: { params: any; }) => {
return <Body
data-ws-id="ogBBW5oNIdeAYFnCJBbyK"
data-ws-component="Body"
className="czyh78x c1tdkd5l">
<Box
data-ws-id="Fi6L9uzVyie8qKK2k-0Qp"
data-ws-component="Box"
className="c1jw6n3y c1pq1y5c c1v3z1fk c1gw4ofd c1yjf6vb clvhrg4">
<Box
data-ws-id="JISeQpZI_BO81QsFkI_iT"
data-ws-component="Box"
className="c1xh41d7 c1ck6wfi c1po90nq c5zup0a c1ahxynn">
<Image
data-ws-id="GM-ldyJY1IsdfaskTpewf"
data-ws-component="Image"
src={"/assets/adrian-infernus-GLf7bAwCdYg-unsplash_7MwisksO2l7AB6eunlQvj.jpg"}
className="c7clg0z cwlepsz c1l6w969 ckgmllg c17847mz" />
</Box>
<Box
data-ws-id="uhcj0QqQIgoDysv5Y0vah"
data-ws-component="Box"
className="cuywqpa c1if5td0 c1fymhwo c1gw4ofd c1yjf6vb c1pq1y5c c1v3z1fk c1kcht6e cyo7zkx c1ga3t29 c549cy1 caga0xr c94qtud ceeznio c10ga11u c1suvl19 c1wqz1qk c3td08y c1n6lmdr c1j2mrtt c13eav8a c1xhj247">
<Box
data-ws-id="a2VHhgfK9QitryqNJoWEB"
data-ws-component="Box"
className="c1kcht6e c94qtud ceeznio c1jnhuwx c1bxpaw4">
<Box
data-ws-id="dHU7o33xkryekDBONJ3lU"
data-ws-component="Box"
className="c1s42im0 c19o14sc cwxwk5e c1qoohzp c1op9f5c c7fcd71 c1omdy7y c17orqzc">
<Image
data-ws-id="ju_ZzBeYPZd7uFNq2EOlE"
data-ws-component="Image"
src={"/assets/nw_AUoY32Pq2bddNKhBjn_iS.png"}
width={360}
height={360}
className="c7clg0z c16dksjc c616708" />
</Box>
<Box
data-ws-id="IpUb9Osg6mpiAvDXVLRGL"
data-ws-component="Box"
className="cdlzphi cfeormw">
<Heading
data-ws-id="7XuvAoYhtcQMzumjOHDR0"
data-ws-component="Heading"
className="cg6avef c26rrk0 c11yw8l1">
{"Warriorcarl"}
</Heading>
<Text
data-ws-id="CRr9dqWK4CoAUR2J6qNQU"
data-ws-component="Text"
className="cg6avef">
{"@warriorcarl"}
</Text>
</Box>
<Box
data-ws-id="u6RpnpnqWHl_9IEQNGjtS"
data-ws-component="Box"
className="cdlzphi cfeormw">
<Paragraph
data-ws-id="ZNrB5gNtzJpM9KjpZkhj3"
data-ws-component="Paragraph"
className="c26rrk0 c11yw8l1">
{"A brilliant data alchemist with a passion for unraveling the intricate threads"}
</Paragraph>
<Link
data-ws-id="kmxWyBT9r-mqvVqRTg7A0"
data-ws-component="Link"
className="czyh78x">
{"nathanmitchell.com"}
</Link>
</Box>
<Box
data-ws-id="Bahlv4uvfimaM6CxE1aJx"
data-ws-component="Box"
className="c1qfklt1 c10ga11u c1kcht6e c1jnhuwx c1bxpaw4">
<Link
data-ws-id="UH4p5MiBkDucoFgl33bXa"
data-ws-component="Link"
target={"_blank"}
href={"https://webstudio.is/"}
className="ceh4t7h c18i8ttg c181n48a czyh78x">
<HtmlEmbed
data-ws-id="j7BBJs7jRqlI-qjlVDLt-"
data-ws-component="HtmlEmbed"
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 32 32\" fill=\"none\">\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16 9.32426C12.313 9.32426 9.32426 12.313 9.32426 16C9.32426 19.6868 12.313 22.6756 16 22.6756C19.6868 22.6756 22.6756 19.6868 22.6756 16C22.6756 12.313 19.6868 9.32426 16 9.32426ZM16 20.3333C13.6067 20.3333 11.6666 18.3932 11.6666 16C11.6666 13.6067 13.6067 11.6666 16 11.6666C18.3932 11.6666 20.3333 13.6067 20.3333 16C20.3333 18.3932 18.3932 20.3333 16 20.3333Z\" fill=\"currentcolor\"></path>\n  <path d=\"M22.9422 10.6203C23.8038 10.6203 24.5023 9.92187 24.5023 9.06029C24.5023 8.19872 23.8038 7.50032 22.9422 7.50032C22.0807 7.50032 21.3822 8.19872 21.3822 9.06029C21.3822 9.92187 22.0807 10.6203 22.9422 10.6203Z\" fill=\"currentcolor\"></path>\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16 3C12.4694 3 12.0267 3.01497 10.6401 3.07823C9.25642 3.14139 8.3114 3.36112 7.48445 3.68251C6.62959 4.01473 5.90461 4.45925 5.1819 5.18195C4.45919 5.90466 4.01468 6.62964 3.68246 7.48451C3.36107 8.3114 3.14134 9.25642 3.07818 10.6401C3.01491 12.0267 3 12.4694 3 16C3 19.5306 3.01491 19.9733 3.07818 21.3599C3.14134 22.7436 3.36107 23.6886 3.68246 24.5155C4.01468 25.3704 4.45919 26.0953 5.1819 26.8181C5.90461 27.5408 6.62959 27.9853 7.48445 28.3175C8.3114 28.6389 9.25642 28.8587 10.6401 28.9218C12.0267 28.985 12.4694 29 16 29C19.5306 29 19.9733 28.985 21.3599 28.9218C22.7436 28.8587 23.6886 28.6389 24.5155 28.3175C25.3704 27.9853 26.0953 27.5408 26.8181 26.8181C27.5408 26.0953 27.9853 25.3704 28.3175 24.5155C28.6389 23.6886 28.8587 22.7436 28.9218 21.3599C28.985 19.9733 29 19.5306 29 16C29 12.4694 28.985 12.0267 28.9218 10.6401C28.8587 9.25642 28.6389 8.3114 28.3175 7.48451C27.9853 6.62964 27.5408 5.90466 26.8181 5.18195C26.0953 4.45925 25.3704 4.01473 24.5155 3.68251C23.6886 3.36112 22.7436 3.14139 21.3599 3.07823C19.9733 3.01497 19.5306 3 16 3ZM16 5.34239C19.4711 5.34239 19.8823 5.3556 21.2531 5.41814C22.5206 5.47599 23.2089 5.68777 23.667 5.86575C24.2738 6.10158 24.7069 6.38334 25.1618 6.83822C25.6167 7.29311 25.8984 7.72622 26.1342 8.33297C26.3123 8.79106 26.5241 9.4794 26.5819 10.7469C26.6444 12.1177 26.6577 12.5289 26.6577 16C26.6577 19.4711 26.6444 19.8823 26.5819 21.2531C26.5241 22.5206 26.3123 23.2089 26.1342 23.667C25.8984 24.2738 25.6167 24.7069 25.1618 25.1618C24.7069 25.6167 24.2738 25.8984 23.667 26.1342C23.2089 26.3123 22.5206 26.5241 21.2531 26.5819C19.8825 26.6444 19.4714 26.6577 16 26.6577C12.5286 26.6577 12.1175 26.6444 10.7469 26.5819C9.4794 26.5241 8.79106 26.3123 8.33297 26.1342C7.72617 25.8984 7.29311 25.6167 6.83817 25.1618C6.38329 24.7069 6.10153 24.2738 5.86575 23.667C5.68772 23.2089 5.47594 22.5206 5.41809 21.2531C5.35555 19.8823 5.34234 19.4711 5.34234 16C5.34234 12.5289 5.35555 12.1177 5.41809 10.7469C5.47594 9.4794 5.68772 8.79106 5.86575 8.33297C6.10153 7.72622 6.38329 7.29311 6.83817 6.83822C7.29311 6.38334 7.72617 6.10158 8.33297 5.86575C8.79106 5.68777 9.4794 5.47599 10.7469 5.41814C12.1177 5.3556 12.5289 5.34239 16 5.34239Z\" fill=\"currentcolor\"></path>\n</svg>\n"} />
</Link>
<Link
data-ws-id="hqmzeEnEZ7vowILrfBDK3"
data-ws-component="Link"
target={"_blank"}
href={"https://webstudio.is/"}
className="ceh4t7h c18i8ttg c181n48a czyh78x">
<HtmlEmbed
data-ws-id="e3ArN-Rc6ERx7mv6fAr0v"
data-ws-component="HtmlEmbed"
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 32 32\" fill=\"none\">\n  <path d=\"M26.9055 6.45923C24.8411 5.5141 22.6617 4.8436 20.4232 4.46484C20.1168 5.01247 19.8396 5.5759 19.5928 6.15278C17.2082 5.79345 14.7833 5.79345 12.3987 6.15278C12.1517 5.57596 11.8745 5.01253 11.5683 4.46484C9.32824 4.8468 7.14745 5.51889 5.08099 6.46417C0.978546 12.5338 -0.133562 18.4527 0.422492 24.2876C2.82499 26.0626 5.51407 27.4126 8.37286 28.2788C9.01658 27.413 9.58618 26.4945 10.0756 25.5331C9.14599 25.1859 8.24865 24.7575 7.39418 24.253C7.61907 24.0898 7.83905 23.9218 8.05159 23.7587C10.538 24.928 13.2518 25.5342 15.9994 25.5342C18.7471 25.5342 21.4609 24.928 23.9473 23.7587C24.1623 23.9342 24.3822 24.1022 24.6047 24.253C23.7485 24.7584 22.8496 25.1875 21.9183 25.5356C22.4072 26.4965 22.9768 27.4143 23.6211 28.2788C26.4823 27.4161 29.1735 26.0668 31.5764 24.29C32.2288 17.5234 30.4618 11.659 26.9055 6.45923ZM10.7799 20.6992C9.23038 20.6992 7.95023 19.293 7.95023 17.563C7.95023 15.833 9.18588 14.4145 10.775 14.4145C12.3641 14.4145 13.6343 15.833 13.6072 17.563C13.58 19.293 12.3591 20.6992 10.7799 20.6992ZM21.2189 20.6992C19.6669 20.6992 18.3917 19.293 18.3917 17.563C18.3917 15.833 19.6274 14.4145 21.2189 14.4145C22.8104 14.4145 24.0709 15.833 24.0437 17.563C24.0165 19.293 22.7981 20.6992 21.2189 20.6992Z\" fill=\"currentcolor\n\"></path>\n</svg>"} />
</Link>
<Link
data-ws-id="qi2MK8oLuERAmH_hZQ2oC"
data-ws-component="Link"
target={"_blank"}
href={"https://webstudio.is/"}
className="ceh4t7h c18i8ttg c181n48a czyh78x">
<HtmlEmbed
data-ws-id="g67R8byJUH0LXNahP-WA-"
data-ws-component="HtmlEmbed"
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 32 32\" fill=\"none\">\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M6.19097 9.38193C7.96372 9.38193 9.38193 7.96372 9.38193 6.19097C9.38193 4.41821 7.96372 3 6.19097 3C4.41821 3 3 4.41821 3 6.19097C3 7.96372 4.41821 9.38193 6.19097 9.38193ZM8.79225 11.6267H3.47397V28.9997H8.79225V11.6267ZM20.7266 16.0003C18.5993 16.0003 17.4174 17.4186 17.4174 19.9004C17.4174 22.5005 17.4174 29.0006 17.5356 29.0006H12.3355V11.6275H17.5356V13.9912C17.5356 13.9912 19.072 11.1548 22.7357 11.1548C26.3994 11.1548 28.9994 13.4003 28.9994 18.0095V29.0006H23.6812V19.9004C23.6812 17.4186 22.7357 16.0003 20.7266 16.0003Z\" fill=\"currentcolor\"></path>\n</svg>"} />
</Link>
<Link
data-ws-id="ruoIXk8Js-_0G98G-IwHU"
data-ws-component="Link"
target={"_blank"}
href={"https://webstudio.is/"}
className="ceh4t7h c18i8ttg c181n48a czyh78x">
<HtmlEmbed
data-ws-id="av1oqORpeqq31iuNtVd-p"
data-ws-component="HtmlEmbed"
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 32 32\" fill=\"none\">\n  <path d=\"M24.0516 3.3457H28.3452L18.9651 14.0671L30 28.6564H21.3598L14.5924 19.8081L6.84902 28.6564H2.55291L12.5858 17.1887L2 3.3457H10.8596L16.9767 11.4335L24.0516 3.3457ZM22.5448 26.0864H24.9238L9.56687 5.78073H7.01386L22.5448 26.0864Z\" fill=\"currentcolor\n\"></path>\n</svg>"} />
</Link>
<Link
data-ws-id="Jpz0l5WUOuhi7XUs7SJky"
data-ws-component="Link"
target={"_blank"}
href={"https://webstudio.is/"}
className="ceh4t7h c18i8ttg c181n48a czyh78x">
<HtmlEmbed
data-ws-id="oEly1D7plX0-PAv6IpZ-z"
data-ws-component="HtmlEmbed"
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 32 32\" fill=\"none\">\n  <path d=\"M13.0755 28H17.8395V15.9551H21.1654L21.5249 11.9101H17.8395C17.8395 11.9101 17.8395 10.382 17.8395 9.57303C17.8395 8.58427 18.0193 8.22472 18.9182 8.22472C19.6373 8.22472 21.5249 8.22472 21.5249 8.22472V4C21.5249 4 18.7384 4 18.1991 4C14.6036 4 12.9856 5.61798 12.9856 8.58427C12.9856 11.191 12.9856 11.8202 12.9856 11.8202H10.4688V15.8652H12.9856V28H13.0755Z\" fill=\"currentcolor\"></path>\n</svg>"} />
</Link>
<Link
data-ws-id="Jnn5xgAD7i1-Y2zaNHtoC"
data-ws-component="Link"
target={"_blank"}
href={"https://webstudio.is/"}
className="ceh4t7h c18i8ttg c181n48a czyh78x">
<HtmlEmbed
data-ws-id="IB05EVg0jpDiFHgIAcCgX"
data-ws-component="HtmlEmbed"
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 32 32\" fill=\"none\">\n  <path d=\"M31.281 8.28904C31.9488 10.7806 31.9488 15.979 31.9488 15.979C31.9488 15.979 31.9488 21.1774 31.281 23.6687C30.9136 25.0433 29.8311 26.126 28.4565 26.4934C25.9648 27.1608 15.9743 27.1608 15.9743 27.1608C15.9743 27.1608 5.98369 27.1608 3.49191 26.4934C2.11755 26.126 1.03486 25.0433 0.667456 23.6687C0 21.1774 0 15.979 0 15.979C0 15.979 0 10.7806 0.667456 8.28904C1.03486 6.91443 2.11755 5.83198 3.49191 5.46458C5.98369 4.79688 15.9743 4.79688 15.9743 4.79688C15.9743 4.79688 25.9648 4.79688 28.4565 5.46458C29.8311 5.83198 30.9136 6.91443 31.281 8.28904ZM12.7792 20.7714L21.0795 15.979L12.7792 11.1867V20.7714Z\" fill=\"currentcolor\n\"></path>\n</svg>"} />
</Link>
<Link
data-ws-id="3oR5DCvpCrXOz2OdrNIex"
data-ws-component="Link"
target={"_blank"}
href={"https://webstudio.is/"}
className="ceh4t7h c18i8ttg c181n48a czyh78x">
<HtmlEmbed
data-ws-id="mCJZtFmkgygP9C1u_2l6J"
data-ws-component="HtmlEmbed"
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 32 32\" fill=\"none\">\n  <path d=\"M9.10234 17.7908C9.39008 17.8867 9.77372 17.7908 9.86963 17.4072C9.96555 17.1194 10.0615 16.544 10.1574 16.2562C10.2533 15.8726 10.2533 15.7767 9.96555 15.4889C9.39008 14.8176 9.00643 13.9544 9.00643 12.7075C9.00643 9.06287 11.692 5.80188 16.1039 5.80188C19.9403 5.80188 22.0504 8.19967 22.0504 11.2688C22.0504 15.393 20.2281 18.9418 17.4466 18.9418C15.9121 18.9418 14.857 17.6949 15.1448 16.1603C15.6243 14.338 16.3916 12.4198 16.3916 11.077C16.3916 9.92607 15.7202 8.96696 14.4734 8.96696C12.9388 8.96696 11.692 10.5975 11.692 12.7075C11.692 14.0503 12.1715 15.0094 12.1715 15.0094C12.1715 15.0094 10.6369 21.6273 10.3492 22.8741C9.77372 25.176 10.2533 28.0534 10.3492 28.3411C10.3492 28.5329 10.6369 28.5329 10.7328 28.437C10.8288 28.2452 12.747 26.0392 13.3225 23.7373C13.5143 23.066 14.3775 19.805 14.3775 19.805C14.857 20.7641 16.2957 21.6273 17.9262 21.6273C22.53 21.6273 25.695 17.4072 25.695 11.7484C25.695 7.52829 22.0504 3.5 16.5834 3.5C9.77372 3.5 6.32091 8.39149 6.32091 12.5157C6.12909 14.8176 7.0882 17.0235 9.10234 17.7908Z\" fill=\"currentcolor\"></path>\n</svg>"} />
</Link>
<Link
data-ws-id="SPaS5zckGQW9o2xWsN1yZ"
data-ws-component="Link"
target={"_blank"}
href={"https://webstudio.is/"}
className="ceh4t7h c18i8ttg c181n48a czyh78x">
<HtmlEmbed
data-ws-id="Zfqr6kD-SXdtZzqILZYkA"
data-ws-component="HtmlEmbed"
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 32 32\" fill=\"none\">\n  <path d=\"M13.75 16H18.0002C18.597 16 19.1693 15.7629 19.5912 15.341C20.0132 14.919 20.2502 14.3467 20.2502 13.75C20.2502 13.1533 20.0132 12.581 19.5912 12.159C19.1693 11.7371 18.597 11.5 18.0002 11.5H13.75V16Z\" fill=\"currentcolor\n\"></path>\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16 31C24.2845 31 31 24.2845 31 16C31 7.7155 24.2845 1 16 1C7.7155 1 1 7.7155 1 16C1 24.2845 7.7155 31 16 31ZM10.75 8.5H18.0002C19.3926 8.5 20.728 9.05312 21.7126 10.0377C22.6971 11.0223 23.2502 12.3576 23.2502 13.75C23.2502 15.1424 22.6971 16.4777 21.7126 17.4623C20.728 18.4469 19.3926 19 18.0002 19H13.75V23.5H10.75V8.5Z\" fill=\"currentcolor\n\"></path>\n</svg>"} />
</Link>
</Box>
</Box>
<Box
data-ws-id="kL-Wfmo45Nt-P0aucHFb_"
data-ws-component="Box"
className="c7clg0z c1jnhuwx c1bxpaw4 c1kcht6e c94qtud">
<Link
data-ws-id="y82iIageFKvdqmTkZLR5K"
data-ws-component="Link"
className="c7clg0z cwxwk5e c1qoohzp c1op9f5c c7fcd71 c11ium0b cj78g8k c18ctunm ci7sgfr czyh78x c1hngvh6 c1kcht6e ceeznio cighfjr ch0qnbe c13eav8a c1xhj247 crpoir0">
<Text
data-ws-id="goQnxvPRy1M8MabJ01LWH"
data-ws-component="Text">
{"📰 Newsletter"}
</Text>
<Image
data-ws-id="bOmJTLwSIgjXy6L4kbb97"
data-ws-component="Image"
src={"/assets/website_icon__VNN0-Jy3_EVqxGWLDLwI.svg"}
className="c18i8ttg c181n48a ci731ex c4j5zbg" />
</Link>
<Link
data-ws-id="Y_EQBGWk_ZQEkVvKGPhYm"
data-ws-component="Link"
className="c7clg0z cwxwk5e c1qoohzp c1op9f5c c7fcd71 c11ium0b cj78g8k c18ctunm ci7sgfr czyh78x c1hngvh6 c1kcht6e ceeznio cighfjr ch0qnbe c13eav8a c1xhj247 crpoir0">
<Text
data-ws-id="Vf79Y51VJaZNmbcullvGn"
data-ws-component="Text">
{"💻 Portfolio"}
</Text>
<Image
data-ws-id="hLZww7AZqjfzV8Dxgmmbx"
data-ws-component="Image"
src={"/assets/website_icon__VNN0-Jy3_EVqxGWLDLwI.svg"}
className="c18i8ttg c181n48a ci731ex c4j5zbg" />
</Link>
<Link
data-ws-id="aXZ5e5P2eINyX8FPVLQFO"
data-ws-component="Link"
className="c7clg0z cwxwk5e c1qoohzp c1op9f5c c7fcd71 c11ium0b cj78g8k c18ctunm ci7sgfr czyh78x c1hngvh6 c1kcht6e ceeznio cighfjr ch0qnbe c13eav8a c1xhj247 crpoir0">
<Text
data-ws-id="Ne3jOjXAYYxjoX0_RVZ84"
data-ws-component="Text">
{"🎙 Podcast"}
</Text>
<Image
data-ws-id="HCpLH29tIjpoSmowXoUgb"
data-ws-component="Image"
src={"/assets/YouTube_Logo_E5JO47S2jVM8B4_N6Jng0.svg"}
className="c18i8ttg c181n48a ci731ex c4j5zbg" />
</Link>
<Link
data-ws-id="_HnwKX0ZV5TSdqpEDhI1p"
data-ws-component="Link"
className="c7clg0z cwxwk5e c1qoohzp c1op9f5c c7fcd71 c11ium0b cj78g8k c18ctunm ci7sgfr czyh78x c1hngvh6 c1kcht6e ceeznio cighfjr ch0qnbe c13eav8a c1xhj247 crpoir0">
<Text
data-ws-id="UxjA5nZUtwrOZEoFGTmBP"
data-ws-component="Text">
{"🤩 Tik Tok"}
</Text>
<Image
data-ws-id="IVZOY2Ayw3Y3U4q8qOni6"
data-ws-component="Image"
src={"/assets/tiktok_1_l-t8rAmwGMXM4QdJoUA6v.svg"}
className="c18i8ttg c181n48a ci731ex c4j5zbg" />
</Link>
</Box>
<Heading
data-ws-id="e3gVrz2kdFLSQPMM07WMa"
data-ws-component="Heading"
className="c26rrk0 c11yw8l1 cg6avef">
{"2 Column"}
</Heading>
<Box
data-ws-id="798NwrYhhwNuxC6GEMkzI"
data-ws-component="Box"
className="c7clg0z c1jnhuwx c1bxpaw4 c1kcht6e c94qtud">
<Box
data-ws-id="ISY11kf96G6u45JlVXmXF"
data-ws-component="Box"
className="c1kcht6e c1jnhuwx c1bxpaw4 cku4kp0">
<Link
data-ws-id="WI2bMrYhTFcb9NGtFRvem"
data-ws-component="Link"
className="c7clg0z cwxwk5e c1qoohzp c1op9f5c c7fcd71 c11ium0b cj78g8k c18ctunm ci7sgfr czyh78x c1hngvh6 c1kcht6e ceeznio cighfjr ch0qnbe c13eav8a c1xhj247 crpoir0">
<Text
data-ws-id="GasmQfkPXdQdmK4cQLyyO"
data-ws-component="Text">
{"📰 Newsletter"}
</Text>
<Image
data-ws-id="I1yQNAOFXrlQZzwYxNl2R"
data-ws-component="Image"
src={"/assets/website_icon__VNN0-Jy3_EVqxGWLDLwI.svg"}
className="c18i8ttg c181n48a ci731ex c4j5zbg" />
</Link>
<Link
data-ws-id="a4KQSTqAGsBHI1OCyRg4-"
data-ws-component="Link"
className="c7clg0z cwxwk5e c1qoohzp c1op9f5c c7fcd71 c11ium0b cj78g8k c18ctunm ci7sgfr czyh78x c1hngvh6 c1kcht6e ceeznio cighfjr ch0qnbe c13eav8a c1xhj247 crpoir0">
<Text
data-ws-id="yxExOfhpym6-oHDNhlvxP"
data-ws-component="Text">
{"💻 Portfolio"}
</Text>
<Image
data-ws-id="b704TXXB39llp4zppKlaz"
data-ws-component="Image"
src={"/assets/website_icon__VNN0-Jy3_EVqxGWLDLwI.svg"}
className="c18i8ttg c181n48a ci731ex c4j5zbg" />
</Link>
</Box>
<Box
data-ws-id="tyAQFt4LanGbS9arWA6fR"
data-ws-component="Box"
className="c1kcht6e c1jnhuwx c1bxpaw4 cku4kp0">
<Link
data-ws-id="oOBksmzMxiYXIeXx1Zu1N"
data-ws-component="Link"
className="c7clg0z cwxwk5e c1qoohzp c1op9f5c c7fcd71 c11ium0b cj78g8k c18ctunm ci7sgfr czyh78x c1hngvh6 c1kcht6e ceeznio cighfjr ch0qnbe c13eav8a c1xhj247 crpoir0">
<Text
data-ws-id="C2sx82JksdLReA2g7-ZGf"
data-ws-component="Text">
{"🎙 Podcast"}
</Text>
<Image
data-ws-id="rFOZ0CNOMCsXkc1uaWfKt"
data-ws-component="Image"
src={"/assets/YouTube_Logo_E5JO47S2jVM8B4_N6Jng0.svg"}
className="c18i8ttg c181n48a ci731ex c4j5zbg" />
</Link>
<Link
data-ws-id="rRAxiyQ4aeRHGAj32VJcw"
data-ws-component="Link"
className="c7clg0z cwxwk5e c1qoohzp c1op9f5c c7fcd71 c11ium0b cj78g8k c18ctunm ci7sgfr czyh78x c1hngvh6 c1kcht6e ceeznio cighfjr ch0qnbe c13eav8a c1xhj247 crpoir0">
<Text
data-ws-id="eM6y54ZAMsGqYmfoPYzUh"
data-ws-component="Text">
{"🤩 Tik Tok"}
</Text>
<Image
data-ws-id="JUXEn7fAvjPxzpMStU5OE"
data-ws-component="Image"
src={"/assets/tiktok_1_l-t8rAmwGMXM4QdJoUA6v.svg"}
className="c18i8ttg c181n48a ci731ex c4j5zbg" />
</Link>
</Box>
</Box>
<Heading
data-ws-id="6dtv0sXBBOgwPNB9FvOz_"
data-ws-component="Heading"
className="c26rrk0 c11yw8l1 cg6avef">
{"4 Column"}
</Heading>
<Box
data-ws-id="H9jI8EZGAoo18a8Ci8iRw"
data-ws-component="Box"
className="chigqiu c1kcht6e c1jnhuwx c1bxpaw4 cku4kp0">
<Box
data-ws-id="aW27aeGdxlF6wX5vxD2Is"
data-ws-component="Box"
className="c1kcht6e c7clg0z c1jnhuwx c1bxpaw4">
<Link
data-ws-id="vyW49fH3DmElSGuuU77oZ"
data-ws-component="Link"
className="c7clg0z c1kcht6e c94qtud c8x583r c1j8oquc c1hngvh6 czyh78x ctyjn47 c15234b6 c108ulao c19f9t5u c16wuevl c1mgk2qg c109lxdd cf2xjad crpoir0">
<Box
data-ws-id="puTmIBASkMpPtdIhlVsaw"
data-ws-component="Box"
className="c1omdy7y c1f7w9qp c1cy9hvl cpi9su1 ccwcuxb">
<Image
data-ws-id="sO73dSSF5--1lUHAL5eTl"
data-ws-component="Image"
src={"/assets/annie-spratt-fbAnIjhrOL4-unsplash_g_WUh5sz3ATJfb0Kzbr9H.jpeg"}
className="c616708 c7clg0z cwlepsz ckgmllg" />
</Box>
<Text
data-ws-id="JNiDroN__9IvymkdPr5Y5"
data-ws-component="Text"
className="c15u3ao4">
{"Cactus Blog Post"}
</Text>
</Link>
<Link
data-ws-id="u7mT5AU0O-Ajf9yfFCzGM"
data-ws-component="Link"
className="c7clg0z c1kcht6e c94qtud c8x583r c1j8oquc c1hngvh6 czyh78x ctyjn47 c15234b6 c108ulao c19f9t5u c16wuevl c1mgk2qg c109lxdd cf2xjad crpoir0">
<Box
data-ws-id="L_k_iEnyE4qCDdtuJieVe"
data-ws-component="Box"
className="c1omdy7y c1f7w9qp c1cy9hvl cpi9su1 ccwcuxb">
<Image
data-ws-id="dFRSrknYDPhHsDICD42fv"
data-ws-component="Image"
src={"/assets/thought-catalog-9aOswReDKPo-unsplash_bFgBgvv7ySrYRR1Co_pth.jpeg"}
className="c616708 c7clg0z cwlepsz ckgmllg" />
</Box>
<Text
data-ws-id="7XgWQOfHbOFmxHNIeUswd"
data-ws-component="Text"
className="c15u3ao4">
{"Avocado Blog Post"}
</Text>
</Link>
</Box>
<Box
data-ws-id="SH6JtybG2SSDfl-pUymks"
data-ws-component="Box"
className="c1kcht6e c7clg0z c1jnhuwx c1bxpaw4">
<Link
data-ws-id="eG2aH6yXIeELKHPdeeCss"
data-ws-component="Link"
className="c7clg0z c1kcht6e c94qtud c8x583r c1j8oquc c1hngvh6 czyh78x ctyjn47 c15234b6 c108ulao c19f9t5u c16wuevl c1mgk2qg c109lxdd cf2xjad crpoir0">
<Box
data-ws-id="PFyVvMHu9NRoEWFOKL4VE"
data-ws-component="Box"
className="c1omdy7y c1f7w9qp c1cy9hvl cpi9su1 ccwcuxb">
<Image
data-ws-id="RVfKb4b4TZR9a2zDN9Ao6"
data-ws-component="Image"
src={"/assets/mae-mu-vbAEHCrvXZ0-unsplash_dccvaRxbJuUlVW2Xsf-UH.jpeg"}
className="c616708 c7clg0z cwlepsz ckgmllg" />
</Box>
<Text
data-ws-id="yI4LMzdquOo0xJ1DlWMI3"
data-ws-component="Text"
className="c15u3ao4">
{"Cherry Blog Post"}
</Text>
</Link>
<Link
data-ws-id="w9qUiHzQUNx6PXVYEnunr"
data-ws-component="Link"
className="c7clg0z c1kcht6e c94qtud c8x583r c1j8oquc c1hngvh6 czyh78x ctyjn47 c15234b6 c108ulao c19f9t5u c16wuevl c1mgk2qg c109lxdd cf2xjad crpoir0">
<Box
data-ws-id="BLWEkZlxIMkcHgxjB0oZE"
data-ws-component="Box"
className="c1omdy7y c1f7w9qp c1cy9hvl cpi9su1 ccwcuxb">
<Image
data-ws-id="r5GPhPBFwmFXZXQddjc-q"
data-ws-component="Image"
src={"/assets/mae-mu-_C5zsV_p-YI-unsplash_jRTX5H8BO4dY1hrm31iym.jpg"}
className="c616708 c7clg0z cwlepsz ckgmllg" />
</Box>
<Text
data-ws-id="cFM-I3AxtG7VHkeUsYXPY"
data-ws-component="Text"
className="c15u3ao4">
{"Lolipop Blog Post"}
</Text>
</Link>
</Box>
</Box>
</Box>
<Slot
data-ws-id="JoJz3s6gAuOecQL3-1DEI"
data-ws-component="Slot">
<Fragment_1
data-ws-id="TpTp2RjbCtW5ofWZSiagR"
data-ws-component="Fragment">
<Link
data-ws-id="UZtdu19rzJ0V6K_-TQfot"
data-ws-component="Link"
href={"https://webstudio.is/"}
prefetch={"none"}
target={"_blank"}
aria-label={""}
rel={"nofollow"}
className="c5s2qr6 c1xh41d7 c1onu71t c1dcpias c1gyqq9f c9sviwu c1j9qt5w cqw8ay2 caiybfj c1x285f6 c1nrqrp9 clhr9jx c13jwddw cjyiool cfgo3x4 c1n37tl0 c1xi7khp c1p0bsrs c1dnhxh8 cfs9jb7 cgpr48b cgijogy cmkwbc1 c96lqr8 c11ihcwq c1tjzjmf cjviiep c15to18 caqjidc cgenzw cpq5ma1 cm231ot c1kcht6e c1vbpq68 c1o2vvs7 c14mp34j c1hngvh6 cd9n507 c17fswci cxdt4tx cs27830 cn5wpjq c14w8dc8 cnxvbcj c1ie4qir">
<Image
data-ws-id="xP5kvTqG1Ud1udrWZC0cD"
data-ws-component="Image"
src={"/assets/logo-icon-color_7lPMMn5N1_sztj7QUZvvx.svg"}
alt={""}
loading={"eager"}
aria-hidden={true}
className="c6hau5l cnpb28a" />
<Text
data-ws-id="dt6LFeOnmEKrCnCGPuGeB"
data-ws-component="Text"
className="c16wgo1q c17jphqi c1lb1h73 cu0g2a">
{"Built with Webstudio"}
</Text>
</Link>
</Fragment_1>
</Slot>
</Box>
</Body>
}


export { Page }

type Params = Record<string, string | undefined>;
export const getRemixParams = ({ ...params }: Params): Params => {
  return params
}



  export const pagesPaths = new Set([""])

  export const formsProperties = new Map<string, { method?: string, action?: string }>([])
  
