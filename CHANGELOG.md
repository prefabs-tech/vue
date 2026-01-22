# [0.29.0](https://github.com/prefabs-tech/vue/compare/v0.28.0...v0.29.0) (2026-01-22)


### Bug Fixes

* **user/store:** ensure signup function returns after setting user successfully ([#920](https://github.com/prefabs-tech/vue/issues/920)) ([1f13548](https://github.com/prefabs-tech/vue/commit/1f13548959f334dd50b3262df6629a3c9fe7b9a7))
* **vue-i18n:** ensure preferred locale is set correctly when locale is not defined ([#919](https://github.com/prefabs-tech/vue/issues/919)) ([8abc701](https://github.com/prefabs-tech/vue/commit/8abc70167e4ba0c16d522a9611400bb57d4badf2))


### Features

* **form/country-picker:** add support to groups ([#921](https://github.com/prefabs-tech/vue/issues/921)) ([900f014](https://github.com/prefabs-tech/vue/commit/900f0148bd14180ee9aabb03010c7289339ebe73))



# [0.28.0](https://github.com/prefabs-tech/vue/compare/v0.27.0...v0.28.0) (2026-01-15)

### Breaking Changes
* **fix(user/router)!:** update redirect after login logic to use route names for better clarity ([90110b6](https://github.com/prefabs-tech/vue/pull/916/commits/90110b6a7ed67649249fa1664c9880cecbf95223))

### Bug Fixes

* **demo:** add github pages SPA routing support ([6579f23](https://github.com/prefabs-tech/vue/commit/6579f23297f667a389e5ec389e168311a56c748c))
* **demo:** fix code style ([68d156a](https://github.com/prefabs-tech/vue/commit/68d156acfe7e805a6c19967e322663d63e53c589))
* **form/currency-picker:**  update currency picker option rendering and option slot properties ([#906](https://github.com/prefabs-tech/vue/issues/906)) ([328a2a6](https://github.com/prefabs-tech/vue/commit/328a2a668c121500c6aaf860d530d05704c373e1))
* **form/select:** fix select-all behavior with duplicate values in groups ([#894](https://github.com/prefabs-tech/vue/issues/894)) ([2a519c6](https://github.com/prefabs-tech/vue/commit/2a519c6d0e7873ece1a2a638a3777e763ca8e50e))


### Features

* **form/country-picker:** add support to flags and different flags style ([#904](https://github.com/prefabs-tech/vue/issues/904)) ([b78fafb](https://github.com/prefabs-tech/vue/commit/b78fafb21e0c99e763cbb70ec5b0b3af89e178d9))
* **form/country-picker:** add support to new locale and add demo([#888](https://github.com/prefabs-tech/vue/issues/888)) ([e62ed03](https://github.com/prefabs-tech/vue/commit/e62ed03edec7cd17d462a54e17c6e91a5ca1a093))
* **form/country-picker:** add support to sort countries alphabetically ([#909](https://github.com/prefabs-tech/vue/issues/909)) ([323e881](https://github.com/prefabs-tech/vue/commit/323e8812717c8286e3532aef424ac2415b16de0b))
* **form/country-picker:** enable country filtering using favorites prop. ([#893](https://github.com/prefabs-tech/vue/issues/893)) ([d556313](https://github.com/prefabs-tech/vue/commit/d556313ae77be7f55be4708c1300f556aca4992f))
* **form/country:** add simple country display component ([#903](https://github.com/prefabs-tech/vue/issues/903)) ([75a535b](https://github.com/prefabs-tech/vue/commit/75a535b70d790e34e246310687b0b074c324c360))
* **form/currency-picker:** update selection slot  with selectedLabels prop ([#907](https://github.com/prefabs-tech/vue/issues/907)) ([755263b](https://github.com/prefabs-tech/vue/commit/755263bf27bbed6233f0c99e8eddc00cfb17c5aa))



# [0.27.0](https://github.com/prefabs-tech/vue/compare/v0.26.0...v0.27.0) (2025-12-18)


### Features

* **demo/country-picker:** add props and event documentation with suitable subtitle ([15db556](https://github.com/prefabs-tech/vue/commit/15db5566531c02b802b765bed3cb830159240a77))
* **form/country-picker:** enable country filtering using include prop. ([#885](https://github.com/prefabs-tech/vue/issues/885)) ([b0fedff](https://github.com/prefabs-tech/vue/commit/b0fedff57084a1a0a35b23fb6b97894d875c0c12))
* **form/country-picker:** enable exclude filter for country picker. ([#886](https://github.com/prefabs-tech/vue/issues/886)) ([c999b72](https://github.com/prefabs-tech/vue/commit/c999b726ff7e3e0fb885fc3b4a3516c119a8742c))
* **form/select:** add support to disable search functionality ([#881](https://github.com/prefabs-tech/vue/issues/881)) ([13d6e99](https://github.com/prefabs-tech/vue/commit/13d6e99dcfcd32e13659ce433810a43514291a23))
* **layout:** add support for no-footer layout and no-header page ([#887](https://github.com/prefabs-tech/vue/issues/887)) ([0b8353b](https://github.com/prefabs-tech/vue/commit/0b8353b12e3d63fb508729e50f189feea156211c))
* **ui/accordion:** update accordion demo and add support to accept active and inactive icon  via prop ([#874](https://github.com/prefabs-tech/vue/issues/874)) ([2f4294b](https://github.com/prefabs-tech/vue/commit/2f4294ba553718abed9d2610c709864ece75c577))



# [0.26.0](https://github.com/prefabs-tech/vue/compare/v0.25.0...v0.26.0) (2025-12-11)


### Features

* add country picker in form ([#875](https://github.com/prefabs-tech/vue/issues/875)) ([c35260b](https://github.com/prefabs-tech/vue/commit/c35260b5b94622eb61be22ac8404133c193e1211))



# [0.25.0](https://github.com/prefabs-tech/vue/compare/v0.24.1...v0.25.0) (2025-12-08)


### Bug Fixes

* **user:** update router to support adding removed routes when required ([#868](https://github.com/prefabs-tech/vue/issues/868)) ([a9fc6e4](https://github.com/prefabs-tech/vue/commit/a9fc6e44d2e7afc9a0ee794281f1b7cd8337ec70))


### Features

* add countries.json ([#870](https://github.com/prefabs-tech/vue/issues/870)) ([a2289f3](https://github.com/prefabs-tech/vue/commit/a2289f30f1e74af52615f0420dd7674bfa6658be))



## [0.24.1](https://github.com/prefabs-tech/vue/compare/v0.24.0...v0.24.1) (2025-12-05)


### Bug Fixes

* fix yaml syntax error ([4f23290](https://github.com/prefabs-tech/vue/commit/4f23290fe5b33a5c42875e8fb5e65ca4188663dd))
* **user/layout:** update router display filter logic to update routes on user data change ([#866](https://github.com/prefabs-tech/vue/issues/866)) ([9c854f0](https://github.com/prefabs-tech/vue/commit/9c854f0f910e272be033afa7c6590d29e7343dfc))



# [0.24.0](https://github.com/prefabs-tech/vue/compare/v0.23.1...v0.24.0) (2025-12-05)


### Features

* **form/select:** add support to show loading icon while fetching options ([#851](https://github.com/prefabs-tech/vue/issues/851)) ([3b3f7c3](https://github.com/prefabs-tech/vue/commit/3b3f7c3933c8f8e92597b4323ef7f2b0f3580060))
* **form/select:** add suppport to display no options message and custom search helper text ([#854](https://github.com/prefabs-tech/vue/issues/854)) ([0eb17d5](https://github.com/prefabs-tech/vue/commit/0eb17d510f094b6079a92a1f556d745980175e04))
* **table:** allow confirmation modal actions to receive the corresponding row data ([#852](https://github.com/prefabs-tech/vue/issues/852)) ([dfc9164](https://github.com/prefabs-tech/vue/commit/dfc9164cca880c74b007ced7ce3026eb7a6c7335))
* **ui/stepper:** Add support vertical stepper with align, controlled content feature ([#857](https://github.com/prefabs-tech/vue/issues/857)) ([7b43820](https://github.com/prefabs-tech/vue/commit/7b4382079d26dd7603e0b163581b353ea8fa14f1))
* **user/layout:** update sidebar layouts to support additional user menu ([#849](https://github.com/prefabs-tech/vue/issues/849)) ([6479743](https://github.com/prefabs-tech/vue/commit/6479743fedefc375bf076104c560ced58cff1e7c))



## [0.23.1](https://github.com/prefabs-tech/vue/compare/v0.23.0...v0.23.1) (2025-11-10)


### Bug Fixes

* update locale prop binding in files table and sidebar usermenu css ([#845](https://github.com/prefabs-tech/vue/issues/845)) ([0e21a27](https://github.com/prefabs-tech/vue/commit/0e21a272a804f27aa1ee3fdb7a28f779c52f3b57))



# [0.23.0](https://github.com/prefabs-tech/vue/compare/v0.22.0...v0.23.0) (2025-11-07)


### Bug Fixes

* **user/basic-layout:** adjust user menu dropdown positioning when no locale switcher ([#836](https://github.com/prefabs-tech/vue/issues/836)) ([0fbce62](https://github.com/prefabs-tech/vue/commit/0fbce625e398d19f4e87248f483247ded75541aa))
* **user:** update route guard and email verification status in user store ([#827](https://github.com/prefabs-tech/vue/issues/827)) ([b14d45e](https://github.com/prefabs-tech/vue/commit/b14d45efc8c36d82947c4d4f815893ffd94b585e))


### Features

* **user/profile:** add support to additional field and fields validation schema ([#838](https://github.com/prefabs-tech/vue/issues/838)) ([c47e76a](https://github.com/prefabs-tech/vue/commit/c47e76aa524039b571b55a484c98d2b0974f9410))
* **user/profile:** add tabbed interface for profile and credentials sections with additional tab support ([#842](https://github.com/prefabs-tech/vue/issues/842)) ([e54930d](https://github.com/prefabs-tech/vue/commit/e54930dea0753745454c7603bd923f4bc7a6c1e5))
* **user:** update logout redirect route to be configurable ([#837](https://github.com/prefabs-tech/vue/issues/837)) ([444dfdb](https://github.com/prefabs-tech/vue/commit/444dfdb92bf9c786fc34587d64ab720acac93441))



# [0.22.0](https://github.com/prefabs-tech/vue/compare/v0.21.0...v0.22.0) (2025-10-10)


### Features

* **form/datepicker:** add support to teleport for date picker component ([#824](https://github.com/prefabs-tech/vue/issues/824)) ([24bbe9d](https://github.com/prefabs-tech/vue/commit/24bbe9d5d327b83d2c734297913700f3f698d9fc))
* **user/password-reset:** update confirm password field to be configurable ([#825](https://github.com/prefabs-tech/vue/issues/825)) ([985afc7](https://github.com/prefabs-tech/vue/commit/985afc778a1e0f20ead3b226fce651436aa0657a))



# [0.21.0](https://github.com/prefabs-tech/vue/compare/v0.20.0...v0.21.0) (2025-10-08)


### Bug Fixes

* **layout/basic:** update layout to show  menu in sidebar for mobile view ([#816](https://github.com/prefabs-tech/vue/issues/816)) ([39ce68c](https://github.com/prefabs-tech/vue/commit/39ce68cb68068e37bc37d3c03d59d247da9b68da))
* **layout:** update logo max width and sidebar header layout style ([#821](https://github.com/prefabs-tech/vue/issues/821)) ([fc00b37](https://github.com/prefabs-tech/vue/commit/fc00b37dc8398275bd93f75e903b2b646b0f0406))
* **user/email-verification:** update router link to display proper resend notification ([#819](https://github.com/prefabs-tech/vue/issues/819)) ([2dcb70e](https://github.com/prefabs-tech/vue/commit/2dcb70e07d16385d9eed773fdaff98d30063f3c6))


### Features

* **user/signup:** update signup and change password form confirm password field to be configurable ([#818](https://github.com/prefabs-tech/vue/issues/818)) ([815c3ef](https://github.com/prefabs-tech/vue/commit/815c3ef37c2cb2f971727db058e21813b859340f))



# [0.20.0](https://github.com/prefabs-tech/vue/compare/v0.19.0...v0.20.0) (2025-09-24)


### Bug Fixes

* **form/form-action:** update buttons alignment  for filled form actions ([#811](https://github.com/prefabs-tech/vue/issues/811)) ([5e713af](https://github.com/prefabs-tech/vue/commit/5e713af6fc60e2295b79423ef41af15b25106461))


### Features

* **form/file-input:** add support to custom error for file input ([#810](https://github.com/prefabs-tech/vue/issues/810)) ([38d19bb](https://github.com/prefabs-tech/vue/commit/38d19bb1714a3e89da24550b23597a33985fc1f0))



# [0.19.0](https://github.com/prefabs-tech/vue/compare/v0.18.0...v0.19.0) (2025-09-15)

### Breaking Changes
* **feat(user/layout)!:** update sidebar header layout to accept no sidebar prop

### Bug Fixes

* **user/login:** show appropriate error message for disallowed users ([#803](https://github.com/prefabs-tech/vue/issues/803)) ([97b380d](https://github.com/prefabs-tech/vue/commit/97b380d581efb0ee067a7f7c767ed362fb19eefd))


### Features

* **table:** support different action mode for table and update related demo ([#800](https://github.com/prefabs-tech/vue/issues/800)) ([d892d66](https://github.com/prefabs-tech/vue/commit/d892d66268877262cc7f5a0909dddf841b5abc0c))
* **table:** update auto action mode to be configurable ([#806](https://github.com/prefabs-tech/vue/issues/806)) ([28dedf2](https://github.com/prefabs-tech/vue/commit/28dedf2d99b6e26989b0809776b6b12b3a35d2bb))
* **ui/dropdown:** add support to severity for dropdown menu ([#801](https://github.com/prefabs-tech/vue/issues/801)) ([e35b173](https://github.com/prefabs-tech/vue/commit/e35b17312ef0351bd1c4c7a4865365bdbfa6f86a))



# [0.18.0](https://github.com/dzangolab/vue/compare/v0.17.0...v0.18.0) (2025-09-04)


### Features

* **vue-user/user menu dropdown:** update the styling of user menu dropdown ([#795](https://github.com/dzangolab/vue/issues/795)) ([17f56cb](https://github.com/dzangolab/vue/commit/17f56cbb60f04cc8d05d427e06cea88faa795b20))



# [0.17.0](https://github.com/prefabs-tech/vue/compare/v0.16.0...v0.17.0) (2025-09-03)


### Bug Fixes

* **user:** update page route navigation when user logged out ([#784](https://github.com/prefabs-tech/vue/issues/784)) ([1b60cec](https://github.com/prefabs-tech/vue/commit/1b60cec0b010d7a5c6a2a879ce5387ad7ef79060))
* **vue-user tests:** update SidebarHeaderLayout snapshot to reflect header changes ([701d7aa](https://github.com/prefabs-tech/vue/commit/701d7aac1fcebe3ff6a3e159b6dddfe4122b09bf))


### Features

* **vue-user/menu:** updated user menu with dynamic menu items ([#790](https://github.com/prefabs-tech/vue/issues/790)) ([4eec3e8](https://github.com/prefabs-tech/vue/commit/4eec3e8b1a309cb04d6dfb91f51d9bd183ed78e2))



# [0.16.0](https://github.com/dzangolab/vue/compare/v0.15.0...v0.16.0) (2025-08-26)


### Features

* **user/login:** implement the feature of redirecting to a certain route after l… ([#776](https://github.com/dzangolab/vue/issues/776)) ([ee01f07](https://github.com/dzangolab/vue/commit/ee01f07144704480af36d02e98fc89ba133dc327))



# [0.15.0](https://github.com/prefabs-tech/vue/compare/v0.14.0...v0.15.0) (2025-08-22)


### Bug Fixes

* **table:** fix table range filter issue on refresh ([#766](https://github.com/prefabs-tech/vue/issues/766)) ([e9648cb](https://github.com/prefabs-tech/vue/commit/e9648cb277780aac78c37f8a9182df99df198364))


### Features

* **user/profile:** add support to update middle name ([#772](https://github.com/prefabs-tech/vue/issues/772)) ([bbcab1b](https://github.com/prefabs-tech/vue/commit/bbcab1ba613774b5bbdb73a9b972f27dcb01d214))
* **user:** add support to show reset password request acknowledgement page on request reset ([#750](https://github.com/prefabs-tech/vue/issues/750)) ([bcad1f2](https://github.com/prefabs-tech/vue/commit/bcad1f2f2e01d2c69e4c6dfec1ce24a40c9ce8b8))



# [0.14.0](https://github.com/prefabs-tech/vue/compare/v0.13.0...v0.14.0) (2025-08-15)


### Features

* **ui/message:** add tip severity option and update demo ([#754](https://github.com/prefabs-tech/vue/issues/754)) ([acff3a2](https://github.com/prefabs-tech/vue/commit/acff3a2031bd44f0d01979aac8eae41c003fa458))



# [0.13.0](https://github.com/dzangolab/vue/compare/v0.12.0...v0.13.0) (2025-08-04)


### Features

* **form:** Show error message for profile update form and update form actions ([#728](https://github.com/dzangolab/vue/issues/728)) ([e12a356](https://github.com/dzangolab/vue/commit/e12a3567658cd93356658f7a0bcc0089dee11766))
* **ui/modal:** add size prop to modal and update demo with documentation ([#731](https://github.com/dzangolab/vue/issues/731)) ([df52c9d](https://github.com/dzangolab/vue/commit/df52c9ddf3c41f65962a9af10b2a6d3b7ada02f3))
* **user/password-reset:** add password reset form modal for user view page ([#734](https://github.com/dzangolab/vue/issues/734)) ([cd1be23](https://github.com/dzangolab/vue/commit/cd1be23634d5c20f2c272f1d7105208fcf1b43bc))



# [0.12.0](https://github.com/prefabs-tech/vue/compare/v0.11.0...v0.12.0) (2025-07-25)



# [0.11.0](https://github.com/dzangolab/vue/compare/v0.10.14...v0.11.0) (2025-07-14)


### Features

* add support to option grouping for select ([406fe6a](https://github.com/dzangolab/vue/commit/406fe6aceae58fb9ad512d58e7baf45202dd83a7))
* add support to search by group ([f714318](https://github.com/dzangolab/vue/commit/f7143188b1afd83efa8f1bb0e1b9bd4a276729d6))



## [0.10.14](https://github.com/dzangolab/vue/compare/v0.10.13...v0.10.14) (2025-07-03)



## [0.10.13](https://github.com/dzangolab/vue/compare/v0.10.12...v0.10.13) (2025-05-27)


### Bug Fixes

* update tab view component to provided slot content with loop ([#645](https://github.com/dzangolab/vue/issues/645)) ([7c246ca](https://github.com/dzangolab/vue/commit/7c246caf90dfa898bbdf6937f079ccd9f9c0311e))



## [0.10.12](https://github.com/dzangolab/vue/compare/v0.10.11...v0.10.12) (2025-05-16)



## [0.10.11](https://github.com/dzangolab/vue/compare/v0.10.10...v0.10.11) (2025-05-05)


### Features

* add API path for change password functionality ([#610](https://github.com/dzangolab/vue/issues/610)) ([12485c8](https://github.com/dzangolab/vue/commit/12485c8198b43727c6af42c81d9d186de280b813))
* add email column filter in invitation table ([#602](https://github.com/dzangolab/vue/issues/602)) ([67fd3cd](https://github.com/dzangolab/vue/commit/67fd3cd556659779c3affa3f1621bd50ce3ff7d9))
* add support of laravel passport authentication in vue-user ([#484](https://github.com/dzangolab/vue/issues/484)) ([2f4e1b5](https://github.com/dzangolab/vue/commit/2f4e1b5f7ebf3885a4d4ea3c2fd398babe9c487e))
* add support to sign up to laravel api ([#609](https://github.com/dzangolab/vue/issues/609)) ([d026344](https://github.com/dzangolab/vue/commit/d0263442f3fca11ad2edfc66e26cbed884d50b49))



## [0.10.10](https://github.com/dzangolab/vue/compare/v0.10.9...v0.10.10) (2025-03-31)


### Features

* redirect user to profile page on incomplete profile ([#587](https://github.com/dzangolab/vue/issues/587)) ([8303247](https://github.com/dzangolab/vue/commit/8303247a6012435aea6cdae81ffdba9cf1fe555c))



## [0.10.9](https://github.com/dzangolab/vue/compare/v0.10.8...v0.10.9) (2025-03-27)



## [0.10.8](https://github.com/dzangolab/vue/compare/v0.10.7...v0.10.8) (2025-03-24)



## [0.10.7](https://github.com/dzangolab/vue/compare/v0.10.6...v0.10.7) (2025-03-21)



## [0.10.7](https://github.com/dzangolab/vue/compare/v0.10.6...v0.10.7) (2025-03-21)



## [0.10.6](https://github.com/dzangolab/vue/compare/v0.10.5...v0.10.6) (2025-03-19)



## [0.10.5](https://github.com/dzangolab/vue/compare/v0.10.4...v0.10.5) (2025-03-17)



## [0.10.4](https://github.com/dzangolab/vue/compare/v0.10.3...v0.10.4) (2025-03-03)



## [0.10.3](https://github.com/dzangolab/vue/compare/v0.10.2...v0.10.3) (2025-02-27)


### Bug Fixes

* **deps:** update dependency @kyvg/vue3-notification to v2.9.1 ([#505](https://github.com/dzangolab/vue/issues/505)) ([b97f449](https://github.com/dzangolab/vue/commit/b97f4491503c0354f86eb100f92c1dbb4beb7c51))



## [0.10.2](https://github.com/dzangolab/vue/compare/v0.10.1...v0.10.2) (2025-02-18)


### Bug Fixes

* update accordion icon import logic ([#477](https://github.com/dzangolab/vue/issues/477)) ([6bdd965](https://github.com/dzangolab/vue/commit/6bdd96573d301a78b499eab46e884466c0d067b0))



## [0.10.1](https://github.com/dzangolab/vue/compare/v0.10.0...v0.10.1) (2025-01-31)


### Features

* add append mode to file input ([3159a68](https://github.com/dzangolab/vue/commit/3159a68d8c185fdedbebf6042a6dadd8cd5a810d))
* add basic file input demo ([4b7f1e7](https://github.com/dzangolab/vue/commit/4b7f1e7de065ab2038b92fe0c785f5e1171ff730))
* add button options demo to file input ([b7efbc5](https://github.com/dzangolab/vue/commit/b7efbc50f1e9e256009b5f08ad02fab70bb77269))
* add dropzone file input demo ([d6f59b3](https://github.com/dzangolab/vue/commit/d6f59b3b780dc7d108eed244f320cad2f5d150f1))
* add file input component to form package ([4ebad91](https://github.com/dzangolab/vue/commit/4ebad91de3d6a67120db196337f897051e9f02d6))
* add multiple and dropzone demo for file input ([4297e73](https://github.com/dzangolab/vue/commit/4297e7395b00b5b5dc5a46b3721ee9d637dfa409))
* add selected file section to file input ([11583a8](https://github.com/dzangolab/vue/commit/11583a8c11aa48a209812e3aae619cfd782959b5))



# [0.10.0](https://github.com/dzangolab/vue/compare/v0.9.4...v0.10.0) (2025-01-15)


### Bug Fixes

* change color schema to only light mode ([#455](https://github.com/dzangolab/vue/issues/455)) ([d6e9359](https://github.com/dzangolab/vue/commit/d6e9359312c25aee4d1ad8b0fe3d6bd15910946e))


### Features

* add change email endpoint and get me methods ([dcd528d](https://github.com/dzangolab/vue/commit/dcd528d19bcd253908c5e38100528ac834e0afb7))
* add divider component to ui with demo ([#438](https://github.com/dzangolab/vue/issues/438)) ([603cb37](https://github.com/dzangolab/vue/commit/603cb373be1bc678c89fb8cee4332ae5cf2e84d3))
* add stub update email form ([7454394](https://github.com/dzangolab/vue/commit/74543949dac25c97b845a17c676ba3c9df446c87))



## [0.9.4](https://github.com/dzangolab/vue/compare/v0.9.3...v0.9.4) (2024-12-24)



## [0.9.3](https://github.com/dzangolab/vue/compare/v0.9.2...v0.9.3) (2024-12-11)



## [0.9.2](https://github.com/dzangolab/vue/compare/v0.9.1...v0.9.2) (2024-12-02)



## [0.9.1](https://github.com/dzangolab/vue/compare/v0.9.0...v0.9.1) (2024-11-12)


### Features

* add back button to each form component demo ([#385](https://github.com/dzangolab/vue/issues/385)) ([33041f2](https://github.com/dzangolab/vue/commit/33041f2c9573cd81a0a0b9367d7f2c385085dd37))



# [0.9.0](https://github.com/dzangolab/vue/compare/v0.8.5...v0.9.0) (2024-11-05)


### Bug Fixes

* update icons in tabbed panel page ([#305](https://github.com/dzangolab/vue/issues/305)) ([58b722a](https://github.com/dzangolab/vue/commit/58b722a4ae4f8b4b7c505302b9bca02ead92db10))


### Features

* add datepicker to demo with source code ([#322](https://github.com/dzangolab/vue/issues/322)) ([016b9a2](https://github.com/dzangolab/vue/commit/016b9a2a3af93fecbecb8a50e6e310c4cdb13679))
* add number input to demo app with source code ([#314](https://github.com/dzangolab/vue/issues/314)) ([0e294f0](https://github.com/dzangolab/vue/commit/0e294f0a5a1d139d0f92bcaca38781603e409373))
* add Password component to demo with source code ([#316](https://github.com/dzangolab/vue/issues/316)) ([4f6a95e](https://github.com/dzangolab/vue/commit/4f6a95e2f150efaf55ffd9658e7664226bad3943))
* add popup component to ui package with demo ([#344](https://github.com/dzangolab/vue/issues/344)) ([b89a3d4](https://github.com/dzangolab/vue/commit/b89a3d468391d939dec2d8827ab1e0bc928ce30a))


### Reverts

* Revert "refactor(eslint): use eslint config from @12deg/eslint-config package (#368)" (#373) ([00f57d4](https://github.com/dzangolab/vue/commit/00f57d4385c8120daea9466e07680c9ae8f10328)), closes [#368](https://github.com/dzangolab/vue/issues/368) [#373](https://github.com/dzangolab/vue/issues/373)



## [0.8.5](https://github.com/dzangolab/vue/compare/v0.8.4...v0.8.5) (2024-08-05)



## [0.8.4](https://github.com/dzangolab/vue/compare/v0.8.3...v0.8.4) (2024-07-15)



## [0.8.3](https://github.com/dzangolab/vue/compare/v0.8.2...v0.8.3) (2024-07-09)



## [0.8.2](https://github.com/dzangolab/vue/compare/v0.8.1...v0.8.2) (2023-10-31)


### Bug Fixes

* make google not required for RouteOverrides interface ([#285](https://github.com/dzangolab/vue/issues/285)) ([b04898f](https://github.com/dzangolab/vue/commit/b04898f121773591b6b127810c3d108f0479a075))



## [0.8.1](https://github.com/dzangolab/vue/compare/v0.8.0...v0.8.1) (2023-09-11)


### Features

* **user:** configurable api base path in supertokens init function through config. ([#280](https://github.com/dzangolab/vue/issues/280)) ([10b4305](https://github.com/dzangolab/vue/commit/10b43052fff7cc381203dfe63d4f6287fa2da29b))



# [0.8.0](https://github.com/dzangolab/vue/compare/v0.7.10...v0.8.0) (2023-08-18)


### Bug Fixes

* demo deployment ([#272](https://github.com/dzangolab/vue/issues/272)) ([78290ba](https://github.com/dzangolab/vue/commit/78290ba1cc6b3b549bfe52f8a49e4d9f53a87ba8))


### Features

* deploy demo to github ([#270](https://github.com/dzangolab/vue/issues/270)) ([e5fbe00](https://github.com/dzangolab/vue/commit/e5fbe00ce2353249feb4a5c1059645428bb46f72))
* implement basic google authentication with supertokens ([#255](https://github.com/dzangolab/vue/issues/255)) ([0172155](https://github.com/dzangolab/vue/commit/01721555ee913babd9cfaabf2f71f321a73da1d1))
* update to support custom layout ([#278](https://github.com/dzangolab/vue/issues/278)) ([6f1ed9c](https://github.com/dzangolab/vue/commit/6f1ed9c814489bf4c81843ffd2897f0ae88ecd96))



## [0.7.10](https://github.com/dzangolab/vue/compare/v0.7.9...v0.7.10) (2023-05-08)


### Bug Fixes

* **deps:** update dependency eslint-import-resolver-typescript to v3.5.5 ([#249](https://github.com/dzangolab/vue/issues/249)) ([0208655](https://github.com/dzangolab/vue/commit/0208655b8f841145a942268de94cdedb0f77b052))
* **deps:** update dependency vue-eslint-parser to v9.1.1 ([#252](https://github.com/dzangolab/vue/issues/252)) ([caaeb21](https://github.com/dzangolab/vue/commit/caaeb21264e0ebfcfa346e6b473f9242d432920e))
* fix typogeraphy and layout style' ([#251](https://github.com/dzangolab/vue/issues/251)) ([2fbb6b9](https://github.com/dzangolab/vue/commit/2fbb6b930390470d5a24c05346f3eeac80eb6bcd))
* only show public items in main menu ([#257](https://github.com/dzangolab/vue/issues/257)) ([fa5ea34](https://github.com/dzangolab/vue/commit/fa5ea34c90f6ea4974a55785577de0acf0b3bc20))


### Reverts

* revert bump version ([0471a8b](https://github.com/dzangolab/vue/commit/0471a8b9629667bac52e1985bb6f87fa1b82050e))



## [0.7.9](https://github.com/dzangolab/vue/compare/v0.7.8...v0.7.9) (2023-04-07)


### Bug Fixes

* fix main menu ([#241](https://github.com/dzangolab/vue/issues/241)) ([17fd937](https://github.com/dzangolab/vue/commit/17fd937f51ba66fdddb5640000bfb7fbdacc86ce))



## [0.7.8](https://github.com/dzangolab/vue/compare/v0.7.7...v0.7.8) (2023-04-05)



## [0.7.7](https://github.com/dzangolab/vue/compare/v0.7.6...v0.7.7) (2023-03-29)


### Bug Fixes

* **deps:** update dependency eslint-plugin-unicorn to v46 ([#193](https://github.com/dzangolab/vue/issues/193)) ([c00efe0](https://github.com/dzangolab/vue/commit/c00efe04dc02445e193fda3b090dae5637ca3e1d))



## [0.7.6](https://github.com/dzangolab/vue/compare/v0.7.5...v0.7.6) (2023-03-27)


### Bug Fixes

* **deps:** update dependency eslint-config-prettier to v8.8.0 ([#197](https://github.com/dzangolab/vue/issues/197)) ([d794845](https://github.com/dzangolab/vue/commit/d794845957e1b1e0eaf2ae5614569adf01406ce7))
* **deps:** update dependency eslint-config-turbo to v0.0.10 ([#187](https://github.com/dzangolab/vue/issues/187)) ([014b112](https://github.com/dzangolab/vue/commit/014b1121b7eaa8a217caa023c4897da0ae293084))
* **deps:** update sentry-javascript monorepo to v7.44.2 ([#191](https://github.com/dzangolab/vue/issues/191)) ([9c0e40f](https://github.com/dzangolab/vue/commit/9c0e40ffbc86a4ef6030ec016e42ecb4786bb1b3))
* **layout:** fix header height in safari ([#218](https://github.com/dzangolab/vue/issues/218)) ([a1cab66](https://github.com/dzangolab/vue/commit/a1cab66a3665c1cafc6e7f502db0909263238214))
* **layout:** fix layout style ([#220](https://github.com/dzangolab/vue/issues/220)) ([0fde927](https://github.com/dzangolab/vue/commit/0fde9276c3b93659c077158bd22d9093f7539afd))
* refactor validation error for password field in login form ([#211](https://github.com/dzangolab/vue/issues/211)) ([67fdeef](https://github.com/dzangolab/vue/commit/67fdeef2d96ec66ede52706b62461f0a90e01f96))



## [0.7.5](https://github.com/dzangolab/vue/compare/v0.7.4...v0.7.5) (2023-03-20)



## [0.7.4](https://github.com/dzangolab/vue/compare/v0.7.3...v0.7.4) (2023-03-10)


### Bug Fixes

* **deps:** update typescript-eslint monorepo to v5.54.0 ([#165](https://github.com/dzangolab/vue/issues/165)) ([57d5c5b](https://github.com/dzangolab/vue/commit/57d5c5b6b8c9410d5cb5b41d9142905af0e5a052))



## [0.7.3](https://github.com/dzangolab/vue/compare/v0.7.2...v0.7.3) (2023-02-20)


### Bug Fixes

* **deps:** update dependency eslint-config-turbo to v0.0.8 ([#158](https://github.com/dzangolab/vue/issues/158)) ([14d7426](https://github.com/dzangolab/vue/commit/14d7426333e0922c5d5d816a8c2da662eb22c142))



## [0.7.2](https://github.com/dzangolab/vue/compare/v0.7.1...v0.7.2) (2023-02-20)


### Bug Fixes

* **deps:** update dependency @kyvg/vue3-notification to v2.9.0 ([#139](https://github.com/dzangolab/vue/issues/139)) ([932fea0](https://github.com/dzangolab/vue/commit/932fea0bb9a6cfdb28f07bbc03c20797b21c44a9))
* **deps:** update dependency supertokens-web-js to v0.5.0 ([#144](https://github.com/dzangolab/vue/issues/144)) ([be82a30](https://github.com/dzangolab/vue/commit/be82a30d2a28ddcba3bdb0420f2ce6c3547c61a9))
* **deps:** update dependency supertokens-website to v16 ([#151](https://github.com/dzangolab/vue/issues/151)) ([a4654e8](https://github.com/dzangolab/vue/commit/a4654e8cbaa717ff5c4a49a9f150619bcda9c725))
* **deps:** update sentry-javascript monorepo to v7.38.0 ([#153](https://github.com/dzangolab/vue/issues/153)) ([50fc002](https://github.com/dzangolab/vue/commit/50fc0025bf16b78b396062269d1c338e7ea0dcd2))



## [0.7.1](https://github.com/dzangolab/vue/compare/v0.7.0...v0.7.1) (2023-02-16)



# [0.7.0](https://github.com/dzangolab/vue/compare/v0.6.10...v0.7.0) (2023-02-16)


### Features

* add vue-user package ([#126](https://github.com/dzangolab/vue/issues/126)) ([6d2cfaf](https://github.com/dzangolab/vue/commit/6d2cfaff4108e67c53e97b791e3ffd9ab175af13))



## [0.6.10](https://github.com/dzangolab/vue/compare/v0.6.9...v0.6.10) (2023-02-14)



## [0.6.9](https://github.com/dzangolab/vue/compare/v0.6.8...v0.6.9) (2023-02-14)



## [0.6.8](https://github.com/dzangolab/vue/compare/v0.6.7...v0.6.8) (2023-02-14)


### Bug Fixes

* **deps:** update sentry-javascript monorepo to v7.37.2 ([#129](https://github.com/dzangolab/vue/issues/129)) ([a4446c1](https://github.com/dzangolab/vue/commit/a4446c10ac1a9c40149c3be14b55fa0d8eae126d))
* **deps:** update typescript-eslint monorepo to v5.52.0 ([#130](https://github.com/dzangolab/vue/issues/130)) ([987afb1](https://github.com/dzangolab/vue/commit/987afb1c2053f761b2af85a87aa503f59ec4cfed))



## [0.6.7](https://github.com/dzangolab/vue/compare/v0.6.5...v0.6.7) (2023-02-12)


### Bug Fixes

* **i18n:** fix locale badge in locale switcher ([63b1765](https://github.com/dzangolab/vue/commit/63b17657413969d3b24e58f45eb3eae6ea16896a))
* **i18n:** fix locale names ([f478a8d](https://github.com/dzangolab/vue/commit/f478a8da67392debac0e72e175cae6df6ad0ce31))
* **layout:** fix layout header ([9b5f07b](https://github.com/dzangolab/vue/commit/9b5f07b61b88cadf1f2c9a4b79d652510369a4da))



## [0.6.6](https://github.com/dzangolab/vue/compare/v0.6.5...v0.6.6) (2023-02-12)


### Bug Fixes

* **deps:** update dependency pinia to v2.0.30 ([#117](https://github.com/dzangolab/vue/issues/117)) ([079f710](https://github.com/dzangolab/vue/commit/079f71073fd3fa2a338ebc20f7976865ef6777f9))
* **deps:** update sentry-javascript monorepo to v7.33.0 ([#92](https://github.com/dzangolab/vue/issues/92)) ([930bff6](https://github.com/dzangolab/vue/commit/930bff6b7ade093aeef44e38b6dd6b1ddde24e60))
* **deps:** update sentry-javascript monorepo to v7.34.0 ([#94](https://github.com/dzangolab/vue/issues/94)) ([36fa667](https://github.com/dzangolab/vue/commit/36fa667ec824d34164821548b9548078e904929a))
* **deps:** update sentry-javascript monorepo to v7.36.0 ([#104](https://github.com/dzangolab/vue/issues/104)) ([a9ad011](https://github.com/dzangolab/vue/commit/a9ad011db716fe191609aaa672ddb48fd1b89e7e))
* **deps:** update sentry-javascript monorepo to v7.37.0 ([#113](https://github.com/dzangolab/vue/issues/113)) ([51c5cf6](https://github.com/dzangolab/vue/commit/51c5cf6bd59507600e3149d93c3bd4539ede7156))
* **deps:** update sentry-javascript monorepo to v7.37.1 ([#114](https://github.com/dzangolab/vue/issues/114)) ([e290389](https://github.com/dzangolab/vue/commit/e290389df887eeb37b580944fb0db8e0676df6c3))
* **deps:** update typescript-eslint monorepo to v5.50.0 ([#101](https://github.com/dzangolab/vue/issues/101)) ([0ce658c](https://github.com/dzangolab/vue/commit/0ce658cced6ff5fab90b89b08e78eb74b274624a))
* **deps:** update typescript-eslint monorepo to v5.51.0 ([#109](https://github.com/dzangolab/vue/issues/109)) ([0282ae4](https://github.com/dzangolab/vue/commit/0282ae41f96ffb5b57852d32c911d96e868b872a))



## [0.6.5](https://github.com/dzangolab/vue/compare/v0.6.4...v0.6.5) (2023-01-24)


### Bug Fixes

* **deps:** update sentry-javascript monorepo to v7.32.1 ([#86](https://github.com/dzangolab/vue/issues/86)) ([6791685](https://github.com/dzangolab/vue/commit/67916859845a5c6dd950cc442fb149f27650e20b))
* **deps:** update typescript-eslint monorepo to v5.49.0 ([#87](https://github.com/dzangolab/vue/issues/87)) ([c973221](https://github.com/dzangolab/vue/commit/c973221dba3037da3be8fd6a539ace6c08c13927))



## [0.6.4](https://github.com/dzangolab/vue/compare/v0.6.3...v0.6.4) (2023-01-22)



## [0.6.3](https://github.com/dzangolab/vue/compare/v0.6.2...v0.6.3) (2023-01-22)


### Bug Fixes

* **deps:** update dependency eslint-import-resolver-typescript to v3.5.3 ([#74](https://github.com/dzangolab/vue/issues/74)) ([7614435](https://github.com/dzangolab/vue/commit/76144353666e7413d4133ee140565435cc2ed2f5))
* **deps:** update dependency eslint-plugin-import to v2.27.5 ([#76](https://github.com/dzangolab/vue/issues/76)) ([ec50380](https://github.com/dzangolab/vue/commit/ec503805545679436b7efc3cdcfe42ed4281f08b))
* **deps:** update dependency eslint-plugin-vue to v9.9.0 ([#77](https://github.com/dzangolab/vue/issues/77)) ([245cab7](https://github.com/dzangolab/vue/commit/245cab7edae79ca854143da92e56cd362e1bfcec))
* **deps:** update sentry-javascript monorepo to v7.31.1 ([#78](https://github.com/dzangolab/vue/issues/78)) ([49d0262](https://github.com/dzangolab/vue/commit/49d0262f2a6e6cc1afad24f2194880a165c56570))



## [0.6.2](https://github.com/dzangolab/vue/compare/v0.6.1...v0.6.2) (2023-01-22)


### Bug Fixes

* **deps:** update dependency eslint-config-prettier to v8.6.0 ([#62](https://github.com/dzangolab/vue/issues/62)) ([3d42260](https://github.com/dzangolab/vue/commit/3d422601e0f8015b166ab1a1c81bbf9a23daf5cf))
* **deps:** update typescript-eslint monorepo to v5.48.2 ([#63](https://github.com/dzangolab/vue/issues/63)) ([180b778](https://github.com/dzangolab/vue/commit/180b778c87b74eb4baa47a36d9f3ece88355e57c))



## [0.6.1](https://github.com/dzangolab/vue/compare/v0.6.0...v0.6.1) (2022-12-27)


### Bug Fixes

* **config/sentry:** fix sentry plugin options ([0c1319e](https://github.com/dzangolab/vue/commit/0c1319e4b0f9193234797bfd2bb813c923d52533))



# [0.6.0](https://github.com/dzangolab/vue/compare/v0.5.1...v0.6.0) (2022-12-27)


### Features

* **config:** update sentry plugin ([#53](https://github.com/dzangolab/vue/issues/53)) ([1501e07](https://github.com/dzangolab/vue/commit/1501e0709b5c17b650b1dd44ced5ed9a97b3b74e))



## [0.5.1](https://github.com/dzangolab/vue/compare/v0.5.0...v0.5.1) (2022-12-27)


### Bug Fixes

* **deps:** update typescript-eslint monorepo to v5.47.1 ([#45](https://github.com/dzangolab/vue/issues/45)) ([8a0512b](https://github.com/dzangolab/vue/commit/8a0512b791ae17b49b12a10e65b827c8bd86fafe))



# [0.5.0](https://github.com/dzangolab/vue/compare/v0.4.2...v0.5.0) (2022-12-27)


### Features

* **layout:** add @dzangolab/vue3-layout library ([#46](https://github.com/dzangolab/vue/issues/46)) ([4e959e4](https://github.com/dzangolab/vue/commit/4e959e49b9c2c021fcab9f354d218552ba6cda69))



## [0.4.2](https://github.com/dzangolab/vue/compare/v0.4.1...v0.4.2) (2022-12-25)



## [0.4.1](https://github.com/dzangolab/vue/compare/v0.4.0...v0.4.1) (2022-12-25)


### Bug Fixes

* **deps:** update sentry-javascript monorepo to v7.28.1 ([#34](https://github.com/dzangolab/vue/issues/34)) ([aa6f13e](https://github.com/dzangolab/vue/commit/aa6f13e0f932491885c806614cf2bf669f7e2427))



# [0.4.0](https://github.com/dzangolab/vue/compare/v0.3.3...v0.4.0) (2022-12-25)



## [0.3.3](https://github.com/dzangolab/vue/compare/v0.3.2...v0.3.3) (2022-12-21)


### Bug Fixes

* **deps:** update sentry-javascript monorepo to v7.28.0 ([#28](https://github.com/dzangolab/vue/issues/28)) ([d2a12bf](https://github.com/dzangolab/vue/commit/d2a12bf283d1e2d068bfd522ffb97662f589c588))



## [0.3.2](https://github.com/dzangolab/vue/compare/v0.3.1...v0.3.2) (2022-12-20)



## [0.3.1](https://github.com/dzangolab/vue/compare/v0.3.0...v0.3.1) (2022-12-20)



# [0.3.0](https://github.com/dzangolab/vue/compare/v0.2.2...v0.3.0) (2022-12-20)


### Features

* **config:** rename package to vue3-config ([6077fb6](https://github.com/dzangolab/vue/commit/6077fb60dcbc19d6e1974abd7f86c0bce832257a))



## [0.2.2](https://github.com/dzangolab/vue/compare/v0.2.1...v0.2.2) (2022-12-20)


### Bug Fixes

* **config:** fix parse function to support number type ([bb2bcc5](https://github.com/dzangolab/vue/commit/bb2bcc51259e816cbdcc55c3d6830729baebff73))



## [0.2.1](https://github.com/dzangolab/vue/compare/v0.2.0...v0.2.1) (2022-12-20)


### Bug Fixes

* **deps:** update typescript-eslint monorepo to v5.47.0 ([#16](https://github.com/dzangolab/vue/issues/16)) ([82d91f8](https://github.com/dzangolab/vue/commit/82d91f826150e16e95ac4bf7c11525e702ef33ef))



# [0.2.0](https://github.com/dzangolab/vue/compare/v0.1.0...v0.2.0) (2022-12-18)


### Bug Fixes

* **deps:** update sentry-javascript monorepo to v7.27.0 ([#12](https://github.com/dzangolab/vue/issues/12)) ([f9e1f07](https://github.com/dzangolab/vue/commit/f9e1f070c76ca30a6cd572cb0076bcbff801c49a))


### Features

* **config:** update config plugin; add sentry ([#11](https://github.com/dzangolab/vue/issues/11)) ([5b0b60b](https://github.com/dzangolab/vue/commit/5b0b60b59ca499003fa46230a14c7676c98e4231))



# [0.1.0](https://github.com/dzangolab/vue/compare/v0.0.13...v0.1.0) (2022-12-18)



## [0.0.13](https://github.com/dzangolab/vue/compare/0.0.1...0.0.13) (2022-12-18)



## [0.0.12](https://github.com/dzangolab/vue/compare/0.0.1...0.0.12) (2022-12-18)



