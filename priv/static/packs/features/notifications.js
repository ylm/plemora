webpackJsonp([5],{149:function(e,t,n){"use strict";n.d(t,"a",function(){return v});var o,i,a=n(2),s=n.n(a),r=n(1),c=n.n(r),l=n(3),u=n.n(l),d=n(4),h=n.n(d),f=n(0),p=n.n(f),g=n(6),v=(i=o=function(e){function t(){return c()(this,t),u()(this,e.apply(this,arguments))}return h()(t,e),t.prototype.render=function(){var e=this.props,t=e.disabled,n=e.visible;return s()("button",{className:"load-more",disabled:t||!n,style:{visibility:n?"visible":"hidden"},onClick:this.props.onClick},void 0,s()(g.b,{id:"status.load_more",defaultMessage:"Load more"}))},t}(p.a.PureComponent),o.defaultProps={visible:!0},i)},283:function(e,t,n){"use strict";function o(e){return function(t){t({type:a,account:e}),t(Object(i.d)("MUTE"))}}t.a=o;var i=(n(14),n(22),n(15),n(26)),a="MUTES_INIT_MODAL"},285:function(e,t,n){"use strict";function o(e,t){return function(n){n({type:a,account:e,status:t}),n(Object(i.d)("REPORT"))}}t.a=o;var i=(n(14),n(26)),a="REPORT_INIT"},286:function(e,t,n){"use strict";var o=n(2),i=n.n(o),a=n(0),s=(n.n(a),n(9)),r=n(152),c=n(67),l=n(18),u=n(68),d=n(22),h=n(92),f=n(283),p=n(285),g=n(26),v=n(6),m=n(12),b=(n(36),Object(v.f)({deleteConfirm:{id:"confirmations.delete.confirm",defaultMessage:"Delete"},deleteMessage:{id:"confirmations.delete.message",defaultMessage:"Are you sure you want to delete this status?"},blockConfirm:{id:"confirmations.block.confirm",defaultMessage:"Block"}})),y=function(){var e=Object(c.e)();return function(t,n){return{status:e(t,n.id)}}},M=function(e,t){var n=t.intl;return{onReply:function(t,n){e(Object(l.T)(t,n))},onModalReblog:function(t){e(Object(u.l)(t))},onReblog:function(t,n){t.get("reblogged")?e(Object(u.n)(t)):n.shiftKey||!m.b?this.onModalReblog(t):e(Object(g.d)("BOOST",{status:t,onReblog:this.onModalReblog}))},onFavourite:function(t){e(t.get("favourited")?Object(u.m)(t):Object(u.i)(t))},onDelete:function(t){e(m.e?Object(g.d)("CONFIRM",{message:n.formatMessage(b.deleteMessage),confirm:n.formatMessage(b.deleteConfirm),onConfirm:function(){return e(Object(h.f)(t.get("id")))}}):Object(h.f)(t.get("id")))},onDirect:function(t,n){e(Object(l.N)(t,n))},onMention:function(t,n){e(Object(l.R)(t,n))},onOpenMedia:function(t,n){e(Object(g.d)("MEDIA",{media:t,index:n}))},onOpenVideo:function(t,n){e(Object(g.d)("VIDEO",{media:t,time:n}))},onBlock:function(t){e(Object(g.d)("CONFIRM",{message:i()(v.b,{id:"confirmations.block.message",defaultMessage:"Are you sure you want to block {name}?",values:{name:i()("strong",{},void 0,"@",t.get("acct"))}}),confirm:n.formatMessage(b.blockConfirm),onConfirm:function(){return e(Object(d.q)(t.get("id")))}}))},onReport:function(t){e(Object(p.a)(t.get("account"),t))},onMute:function(t){e(Object(f.a)(t))},onMuteConversation:function(t){e(t.get("muted")?Object(h.k)(t.get("id")):Object(h.i)(t.get("id")))},onToggleHidden:function(t){e(t.get("hidden")?Object(h.j)(t.get("id")):Object(h.h)(t.get("id")))}}};t.a=Object(v.g)(Object(s.connect)(y,M)(r.a))},288:function(e,t,n){"use strict";n.d(t,"a",function(){return I});var o,i,a=n(2),s=n.n(a),r=n(1),c=n.n(r),l=n(3),u=n.n(l),d=n(4),h=n.n(d),f=n(94),p=n.n(f),g=n(0),v=n.n(g),m=n(151),b=n(5),y=n.n(b),M=n(289),k=n(149),C=n(294),O=n(8),_=(n.n(O),n(10)),w=n.n(_),j=n(153),I=(i=o=function(e){function t(){var n,o,i;c()(this,t);for(var a=arguments.length,s=Array(a),r=0;r<a;r++)s[r]=arguments[r];return n=o=u()(this,e.call.apply(e,[this].concat(s))),o.state={lastMouseMove:null},o.intersectionObserverWrapper=new C.a,o.handleScroll=p()(function(){if(o.node){var e=o.node,t=e.scrollTop,n=e.scrollHeight,i=e.clientHeight,a=n-t-i;o._oldScrollPosition=n-t,400>a&&o.props.onLoadMore&&!o.props.isLoading&&o.props.onLoadMore(),t<100&&o.props.onScrollToTop?o.props.onScrollToTop():o.props.onScroll&&o.props.onScroll()}},150,{trailing:!0}),o.handleMouseMove=p()(function(){o._lastMouseMove=new Date},300),o.handleMouseLeave=function(){o._lastMouseMove=null},o.onFullScreenChange=function(){o.setState({fullscreen:Object(j.d)()})},o.setRef=function(e){o.node=e},o.handleLoadMore=function(e){e.preventDefault(),o.props.onLoadMore()},i=n,u()(o,i)}return h()(t,e),t.prototype.componentDidMount=function(){this.attachScrollListener(),this.attachIntersectionObserver(),Object(j.a)(this.onFullScreenChange),this.handleScroll()},t.prototype.componentDidUpdate=function(e){if(v.a.Children.count(e.children)>0&&v.a.Children.count(e.children)<v.a.Children.count(this.props.children)&&this.getFirstChildKey(e)!==this.getFirstChildKey(this.props)&&this._oldScrollPosition&&this.node.scrollTop>0){var t=this.node.scrollHeight-this._oldScrollPosition;this.node.scrollTop!==t&&(this.node.scrollTop=t)}else this._oldScrollPosition=this.node.scrollHeight-this.node.scrollTop},t.prototype.componentWillUnmount=function(){this.detachScrollListener(),this.detachIntersectionObserver(),Object(j.b)(this.onFullScreenChange)},t.prototype.attachIntersectionObserver=function(){this.intersectionObserverWrapper.connect({root:this.node,rootMargin:"300% 0px"})},t.prototype.detachIntersectionObserver=function(){this.intersectionObserverWrapper.disconnect()},t.prototype.attachScrollListener=function(){this.node.addEventListener("scroll",this.handleScroll)},t.prototype.detachScrollListener=function(){this.node.removeEventListener("scroll",this.handleScroll)},t.prototype.getFirstChildKey=function(e){var t=e.children,n=t;return t instanceof O.List?n=t.get(0):Array.isArray(t)&&(n=t[0]),n&&n.key},t.prototype._recentlyMoved=function(){return null!==this._lastMouseMove&&new Date-this._lastMouseMove<600},t.prototype.render=function(){var e=this,t=this.props,n=t.children,o=t.scrollKey,i=t.trackScroll,a=t.shouldUpdateScroll,r=t.isLoading,c=t.hasMore,l=t.prepend,u=t.emptyMessage,d=t.onLoadMore,h=this.state.fullscreen,f=v.a.Children.count(n),p=c&&f>0&&d?s()(k.a,{visible:!r,onClick:this.handleLoadMore}):null,g=null;return g=r||f>0||!u?v.a.createElement("div",{className:w()("scrollable",{fullscreen:h}),ref:this.setRef,onMouseMove:this.handleMouseMove,onMouseLeave:this.handleMouseLeave},s()("div",{role:"feed",className:"item-list"},void 0,l,v.a.Children.map(this.props.children,function(t,n){return s()(M.a,{id:t.key,index:n,listLength:f,intersectionObserverWrapper:e.intersectionObserverWrapper,saveHeightKey:i?e.context.router.route.location.key+":"+o:null},t.key,t)}),p)):v.a.createElement("div",{className:"empty-column-indicator",ref:this.setRef},u),i?s()(m.a,{scrollKey:o,shouldUpdateScroll:a},void 0,g):g},t}(g.PureComponent),o.contextTypes={router:y.a.object},o.defaultProps={trackScroll:!0},i)},289:function(e,t,n){"use strict";var o=n(9),i=n(290),a=n(95),s=function(e,t){return{cachedHeight:e.getIn(["height_cache",t.saveHeightKey,t.id])}},r=function(e){return{onHeightChange:function(t,n,o){e(Object(a.d)(t,n,o))}}};t.a=Object(o.connect)(s,r)(i.a)},290:function(e,t,n){"use strict";n.d(t,"a",function(){return v});var o=n(1),i=n.n(o),a=n(3),s=n.n(a),r=n(4),c=n.n(r),l=n(0),u=n.n(l),d=n(291),h=n(293),f=n(8),p=(n.n(f),["id","index","listLength"]),g=["id","index","listLength","cachedHeight"],v=function(e){function t(){var n,o,a;i()(this,t);for(var r=arguments.length,c=Array(r),l=0;l<r;l++)c[l]=arguments[l];return n=o=s()(this,e.call.apply(e,[this].concat(c))),o.state={isHidden:!1},o.handleIntersection=function(e){o.entry=e,Object(d.a)(o.calculateHeight),o.setState(o.updateStateAfterIntersection)},o.updateStateAfterIntersection=function(e){return e.isIntersecting&&!o.entry.isIntersecting&&Object(d.a)(o.hideIfNotIntersecting),{isIntersecting:o.entry.isIntersecting,isHidden:!1}},o.calculateHeight=function(){var e=o.props,t=e.onHeightChange,n=e.saveHeightKey,i=e.id;o.height=Object(h.a)(o.entry).height,t&&n&&t(n,i,o.height)},o.hideIfNotIntersecting=function(){o.componentMounted&&o.setState(function(e){return{isHidden:!e.isIntersecting}})},o.handleRef=function(e){o.node=e},a=n,s()(o,a)}return c()(t,e),t.prototype.shouldComponentUpdate=function(e,t){var n=this,o=!this.state.isIntersecting&&(this.state.isHidden||this.props.cachedHeight);return!!o!=!(t.isIntersecting||!t.isHidden&&!e.cachedHeight)||!(o?g:p).every(function(t){return Object(f.is)(e[t],n.props[t])})},t.prototype.componentDidMount=function(){var e=this.props,t=e.intersectionObserverWrapper,n=e.id;t.observe(n,this.node,this.handleIntersection),this.componentMounted=!0},t.prototype.componentWillUnmount=function(){var e=this.props,t=e.intersectionObserverWrapper,n=e.id;t.unobserve(n,this.node),this.componentMounted=!1},t.prototype.render=function(){var e=this.props,t=e.children,n=e.id,o=e.index,i=e.listLength,a=e.cachedHeight,s=this.state,r=s.isIntersecting,c=s.isHidden;return r||!c&&!a?u.a.createElement("article",{ref:this.handleRef,"aria-posinset":o,"aria-setsize":i,"data-id":n,tabIndex:"0"},t&&u.a.cloneElement(t,{hidden:!1})):u.a.createElement("article",{ref:this.handleRef,"aria-posinset":o,"aria-setsize":i,style:{height:(this.height||a)+"px",opacity:0,overflow:"hidden"},"data-id":n,tabIndex:"0"},t&&u.a.cloneElement(t,{hidden:!0}))},t}(u.a.Component)},291:function(e,t,n){"use strict";function o(e){for(;r.length&&e.timeRemaining()>0;)r.shift()();r.length?requestIdleCallback(o):c=!1}function i(e){r.push(e),c||(c=!0,requestIdleCallback(o))}var a=n(292),s=n.n(a),r=new s.a,c=!1;t.a=i},292:function(e,t,n){"use strict";function o(){this.length=0}o.prototype.push=function(e){var t={item:e};this.last?this.last=this.last.next=t:this.last=this.first=t,this.length++},o.prototype.shift=function(){var e=this.first;if(e)return this.first=e.next,--this.length||(this.last=void 0),e.item},o.prototype.slice=function(e,t){e=void 0===e?0:e,t=void 0===t?1/0:t;for(var n=[],o=0,i=this.first;i&&!(--t<0);i=i.next)++o>e&&n.push(i.item);return n},e.exports=o},293:function(e,t,n){"use strict";function o(e){if("boolean"!=typeof i){var t=e.target.getBoundingClientRect(),n=e.boundingClientRect;i=t.height!==n.height||t.top!==n.top||t.width!==n.width||t.bottom!==n.bottom||t.left!==n.left||t.right!==n.right}return i?e.target.getBoundingClientRect():e.boundingClientRect}var i=void 0;t.a=o},294:function(e,t,n){"use strict";var o=n(1),i=n.n(o),a=function(){function e(){i()(this,e),this.callbacks={},this.observerBacklog=[],this.observer=null}return e.prototype.connect=function(e){var t=this,n=function(e){e.forEach(function(e){var n=e.target.getAttribute("data-id");t.callbacks[n]&&t.callbacks[n](e)})};this.observer=new IntersectionObserver(n,e),this.observerBacklog.forEach(function(e){var n=e[0],o=e[1],i=e[2];t.observe(n,o,i)}),this.observerBacklog=null},e.prototype.observe=function(e,t,n){this.observer?(this.callbacks[e]=n,this.observer.observe(t)):this.observerBacklog.push([e,t,n])},e.prototype.unobserve=function(e,t){this.observer&&(delete this.callbacks[e],this.observer.unobserve(t))},e.prototype.disconnect=function(){this.observer&&(this.callbacks={},this.observer.disconnect(),this.observer=null)},e}();t.a=a},804:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"default",function(){return L});var o,i,a,s,r=n(2),c=n.n(r),l=n(1),u=n.n(l),d=n(3),h=n.n(d),f=n(4),p=n.n(f),g=n(34),v=n.n(g),m=n(0),b=n.n(m),y=n(9),M=n(70),k=n(69),C=n(101),O=n(298),_=n(953),w=n(6),j=n(955),I=n(96),N=(n.n(I),n(8)),S=(n.n(N),n(288)),P=n(149),x=Object(w.f)({title:{id:"column.notifications",defaultMessage:"Notifications"}}),T=Object(I.createSelector)([function(e){return Object(N.List)(e.getIn(["settings","notifications","shows"]).filter(function(e){return!e}).keys())},function(e){return e.getIn(["notifications","items"])}],function(e,t){return t.filterNot(function(t){return null!==t&&e.includes(t.get("type"))})}),R=function(e){function t(){var n,o,i;u()(this,t);for(var a=arguments.length,s=Array(a),r=0;r<a;r++)s[r]=arguments[r];return n=o=h()(this,e.call.apply(e,[this].concat(s))),o.handleClick=function(){o.props.onClick(o.props.maxId)},i=n,h()(o,i)}return p()(t,e),t.prototype.render=function(){return c()(P.a,{onClick:this.handleClick,disabled:this.props.disabled})},t}(b.a.PureComponent),E=function(e){return{notifications:T(e),isLoading:e.getIn(["notifications","isLoading"],!0),isUnread:e.getIn(["notifications","unread"])>0,hasMore:e.getIn(["notifications","hasMore"])}},L=(o=Object(y.connect)(E))(i=Object(w.g)((s=a=function(e){function t(){var n,o,i;u()(this,t);for(var a=arguments.length,s=Array(a),r=0;r<a;r++)s[r]=arguments[r];return n=o=h()(this,e.call.apply(e,[this].concat(s))),o.handleLoadGap=function(e){o.props.dispatch(Object(C.h)({maxId:e}))},o.handleLoadOlder=v()(function(){var e=o.props.notifications.last();o.props.dispatch(Object(C.h)({maxId:e&&e.get("id")}))},300,{leading:!0}),o.handleScrollToTop=v()(function(){o.props.dispatch(Object(C.i)(!0))},100),o.handleScroll=v()(function(){o.props.dispatch(Object(C.i)(!1))},100),o.handlePin=function(){var e=o.props,t=e.columnId,n=e.dispatch;n(t?Object(O.f)(t):Object(O.d)("NOTIFICATIONS",{}))},o.handleMove=function(e){var t=o.props,n=t.columnId;(0,t.dispatch)(Object(O.e)(n,e))},o.handleHeaderClick=function(){o.column.scrollTop()},o.setColumnRef=function(e){o.column=e},o.handleMoveUp=function(e){var t=o.props.notifications.findIndex(function(t){return null!==t&&t.get("id")===e})-1;o._selectChild(t)},o.handleMoveDown=function(e){var t=o.props.notifications.findIndex(function(t){return null!==t&&t.get("id")===e})+1;o._selectChild(t)},i=n,h()(o,i)}return p()(t,e),t.prototype.componentWillUnmount=function(){this.handleLoadOlder.cancel(),this.handleScrollToTop.cancel(),this.handleScroll.cancel(),this.props.dispatch(Object(C.i)(!1))},t.prototype._selectChild=function(e){var t=this.column.node.querySelector("article:nth-of-type("+(e+1)+") .focusable");t&&t.focus()},t.prototype.render=function(){var e=this,t=this.props,n=t.intl,o=t.notifications,i=t.shouldUpdateScroll,a=t.isLoading,s=t.isUnread,r=t.columnId,l=t.multiColumn,u=t.hasMore,d=!!r,h=c()(w.b,{id:"empty_column.notifications",defaultMessage:"You don't have any notifications yet. Interact with others to start the conversation."}),f=null;f=a&&this.scrollableContent?this.scrollableContent:o.size>0||u?o.map(function(t,n){return null===t?c()(R,{disabled:a,maxId:n>0?o.getIn([n-1,"id"]):null,onClick:e.handleLoadGap},"gap:"+o.getIn([n+1,"id"])):c()(_.a,{notification:t,accountId:t.get("account"),onMoveUp:e.handleMoveUp,onMoveDown:e.handleMoveDown},t.get("id"))}):null,this.scrollableContent=f;var p=c()(S.a,{scrollKey:"notifications-"+r,trackScroll:!d,isLoading:a,hasMore:u,emptyMessage:h,onLoadMore:this.handleLoadOlder,onScrollToTop:this.handleScrollToTop,onScroll:this.handleScroll,shouldUpdateScroll:i},void 0,f);return b.a.createElement(M.a,{ref:this.setColumnRef},c()(k.a,{icon:"bell",active:s,title:n.formatMessage(x.title),onPin:this.handlePin,onMove:this.handleMove,onClick:this.handleHeaderClick,pinned:d,multiColumn:l},void 0,c()(j.a,{})),p)},t}(b.a.PureComponent),a.defaultProps={trackScroll:!0},i=s))||i)||i},841:function(e,t,n){"use strict";var o=n(2),i=n.n(o),a=n(0),s=(n.n(a),n(9)),r=n(6),c=n(67),l=n(842),u=n(22),d=n(26),h=n(283),f=n(12),p=Object(r.f)({unfollowConfirm:{id:"confirmations.unfollow.confirm",defaultMessage:"Unfollow"}}),g=function(){var e=Object(c.c)();return function(t,n){return{account:e(t,n.id)}}},v=function(e,t){var n=t.intl;return{onFollow:function(t){e(t.getIn(["relationship","following"])||t.getIn(["relationship","requested"])?f.j?Object(d.d)("CONFIRM",{message:i()(r.b,{id:"confirmations.unfollow.message",defaultMessage:"Are you sure you want to unfollow {name}?",values:{name:i()("strong",{},void 0,"@",t.get("acct"))}}),confirm:n.formatMessage(p.unfollowConfirm),onConfirm:function(){return e(Object(u.D)(t.get("id")))}}):Object(u.D)(t.get("id")):Object(u.z)(t.get("id")))},onBlock:function(t){e(t.getIn(["relationship","blocking"])?Object(u.C)(t.get("id")):Object(u.q)(t.get("id")))},onMute:function(t){e(t.getIn(["relationship","muting"])?Object(u.E)(t.get("id")):Object(h.a)(t))},onMuteNotifications:function(t,n){e(Object(u.A)(t.get("id"),n))}}};t.a=Object(r.g)(Object(s.connect)(g,v)(l.a))},842:function(e,t,n){"use strict";n.d(t,"a",function(){return N});var o,i,a,s=n(2),r=n.n(s),c=n(1),l=n.n(c),u=n(3),d=n.n(u),h=n(4),f=n.n(h),p=n(0),g=(n.n(p),n(13)),v=n.n(g),m=n(5),b=n.n(m),y=n(57),M=n(56),k=n(296),C=n(23),O=n(6),_=n(11),w=n.n(_),j=n(12),I=Object(O.f)({follow:{id:"account.follow",defaultMessage:"Follow"},unfollow:{id:"account.unfollow",defaultMessage:"Unfollow"},requested:{id:"account.requested",defaultMessage:"Awaiting approval"},unblock:{id:"account.unblock",defaultMessage:"Unblock @{name}"},unmute:{id:"account.unmute",defaultMessage:"Unmute @{name}"},mute_notifications:{id:"account.mute_notifications",defaultMessage:"Mute notifications from @{name}"},unmute_notifications:{id:"account.unmute_notifications",defaultMessage:"Unmute notifications from @{name}"}}),N=Object(O.g)((a=i=function(e){function t(){var n,o,i;l()(this,t);for(var a=arguments.length,s=Array(a),r=0;r<a;r++)s[r]=arguments[r];return n=o=d()(this,e.call.apply(e,[this].concat(s))),o.handleFollow=function(){o.props.onFollow(o.props.account)},o.handleBlock=function(){o.props.onBlock(o.props.account)},o.handleMute=function(){o.props.onMute(o.props.account)},o.handleMuteNotifications=function(){o.props.onMuteNotifications(o.props.account,!0)},o.handleUnmuteNotifications=function(){o.props.onMuteNotifications(o.props.account,!1)},i=n,d()(o,i)}return f()(t,e),t.prototype.render=function(){var e=this.props,t=e.account,n=e.intl,o=e.hidden;if(!t)return r()("div",{});if(o)return r()("div",{},void 0,t.get("display_name"),t.get("username"));var i=void 0;if(t.get("id")!==j.g&&null!==t.get("relationship",null)){var a=t.getIn(["relationship","following"]),s=t.getIn(["relationship","requested"]),c=t.getIn(["relationship","blocking"]),l=t.getIn(["relationship","muting"]);if(s)i=r()(C.a,{disabled:!0,icon:"hourglass",title:n.formatMessage(I.requested)});else if(c)i=r()(C.a,{active:!0,icon:"unlock-alt",title:n.formatMessage(I.unblock,{name:t.get("username")}),onClick:this.handleBlock});else if(l){var u=void 0;u=t.getIn(["relationship","muting_notifications"])?r()(C.a,{active:!0,icon:"bell",title:n.formatMessage(I.unmute_notifications,{name:t.get("username")}),onClick:this.handleUnmuteNotifications}):r()(C.a,{active:!0,icon:"bell-slash",title:n.formatMessage(I.mute_notifications,{name:t.get("username")}),onClick:this.handleMuteNotifications}),i=r()(p.Fragment,{},void 0,r()(C.a,{active:!0,icon:"volume-up",title:n.formatMessage(I.unmute,{name:t.get("username")}),onClick:this.handleMute}),u)}else t.get("moved")&&!a||(i=r()(C.a,{icon:a?"user-times":"user-plus",title:n.formatMessage(a?I.unfollow:I.follow),onClick:this.handleFollow,active:a}))}return r()("div",{className:"account"},void 0,r()("div",{className:"account__wrapper"},void 0,r()(k.a,{className:"account__display-name",href:t.get("url"),to:"/accounts/"+t.get("id")},t.get("id"),r()("div",{className:"account__avatar-wrapper"},void 0,r()(y.a,{account:t,size:36})),r()(M.a,{account:t})),r()("div",{className:"account__relationship"},void 0,i)))},t}(w.a),i.propTypes={account:v.a.map.isRequired,onFollow:b.a.func.isRequired,onBlock:b.a.func.isRequired,onMute:b.a.func.isRequired,onMuteNotifications:b.a.func.isRequired,intl:b.a.object.isRequired,hidden:b.a.bool},o=a))||o},865:function(e,t,n){"use strict";n.d(t,"a",function(){return g});var o=n(2),i=n.n(o),a=n(1),s=n.n(a),r=n(3),c=n.n(r),l=n(4),u=n.n(l),d=n(0),h=n.n(d),f=n(866),p=n.n(f),g=function(e){function t(){var n,o,i;s()(this,t);for(var a=arguments.length,r=Array(a),l=0;l<a;l++)r[l]=arguments[l];return n=o=c()(this,e.call.apply(e,[this].concat(r))),o.onChange=function(e){var t=e.target;o.props.onChange(o.props.settingPath,t.checked)},i=n,c()(o,i)}return u()(t,e),t.prototype.render=function(){var e=this.props,t=e.prefix,n=e.settings,o=e.settingPath,a=e.label,s=e.meta,r=["setting-toggle",t].concat(o).filter(Boolean).join("-");return i()("div",{className:"setting-toggle"},void 0,i()(p.a,{id:r,checked:n.getIn(o),onChange:this.onChange,onKeyDown:this.onKeyDown}),i()("label",{htmlFor:r,className:"setting-toggle__label"},void 0,a),s&&i()("span",{className:"setting-meta__label"},void 0,s))},t}(h.a.PureComponent)},866:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(0),d=o(u),h=n(10),f=o(h),p=n(5),g=o(p),v=n(867),m=o(v),b=n(868),y=o(b),M=n(869),k=function(e){function t(e){a(this,t);var n=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleClick=n.handleClick.bind(n),n.handleTouchStart=n.handleTouchStart.bind(n),n.handleTouchMove=n.handleTouchMove.bind(n),n.handleTouchEnd=n.handleTouchEnd.bind(n),n.handleFocus=n.handleFocus.bind(n),n.handleBlur=n.handleBlur.bind(n),n.previouslyChecked=!(!e.checked&&!e.defaultChecked),n.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},n}return r(t,e),l(t,[{key:"componentWillReceiveProps",value:function(e){"checked"in e&&this.setState({checked:!!e.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var n=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:n})}},{key:"handleTouchStart",value:function(e){this.startX=(0,M.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,M.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var n=(0,M.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>n?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<n&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var n=this.props.icons;return n?void 0===n[e]?t.defaultProps.icons[e]:n[e]:null}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,o=(t.icons,i(t,["className","icons"])),a=(0,f.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},n);return d.default.createElement("div",{className:a,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},d.default.createElement("div",{className:"react-toggle-track"},d.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),d.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),d.default.createElement("div",{className:"react-toggle-thumb"}),d.default.createElement("input",c({},o,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(u.PureComponent);t.default=k,k.displayName="Toggle",k.defaultProps={icons:{checked:d.default.createElement(m.default,null),unchecked:d.default.createElement(y.default,null)}},k.propTypes={checked:g.default.bool,disabled:g.default.bool,defaultChecked:g.default.bool,onChange:g.default.func,onFocus:g.default.func,onBlur:g.default.func,className:g.default.string,name:g.default.string,value:g.default.string,id:g.default.string,"aria-labelledby":g.default.string,"aria-label":g.default.string,icons:g.default.oneOfType([g.default.bool,g.default.shape({checked:g.default.node,unchecked:g.default.node})])}},867:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),i=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default=function(){return i.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},i.default.createElement("title",null,"switch-check"),i.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},868:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),i=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default=function(){return i.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},i.default.createElement("title",null,"switch-x"),i.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},869:function(e,t,n){"use strict";function o(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var n=t[0];return{x:n.clientX,y:n.clientY}}var o=e.pageX;if(void 0!==o)return{x:o,y:e.pageY}}return{x:0,y:0}}Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=o},953:function(e,t,n){"use strict";var o=n(9),i=n(67),a=n(954),s=n(18),r=function(){var e=Object(i.d)();return function(t,n){return{notification:e(t,n.notification,n.accountId)}}},c=function(e){return{onMention:function(t,n){e(Object(s.R)(t,n))}}};t.a=Object(o.connect)(r,c)(a.a)},954:function(e,t,n){"use strict";n.d(t,"a",function(){return w});var o,i,a=n(2),s=n.n(a),r=n(1),c=n.n(r),l=n(3),u=n.n(l),d=n(4),h=n.n(d),f=n(0),p=(n.n(f),n(5)),g=n.n(p),v=n(13),m=n.n(v),b=n(286),y=n(841),M=n(6),k=n(296),C=n(11),O=n.n(C),_=n(156),w=(n.n(_),i=o=function(e){function t(){var n,o,i;c()(this,t);for(var a=arguments.length,s=Array(a),r=0;r<a;r++)s[r]=arguments[r];return n=o=u()(this,e.call.apply(e,[this].concat(s))),o.handleMoveUp=function(){var e=o.props,t=e.notification;(0,e.onMoveUp)(t.get("id"))},o.handleMoveDown=function(){var e=o.props,t=e.notification;(0,e.onMoveDown)(t.get("id"))},o.handleOpen=function(){var e=o.props.notification;e.get("status")?o.context.router.history.push("/statuses/"+e.get("status")):o.handleOpenProfile()},o.handleOpenProfile=function(){var e=o.props.notification;o.context.router.history.push("/accounts/"+e.getIn(["account","id"]))},o.handleMention=function(e){e.preventDefault();var t=o.props,n=t.notification;(0,t.onMention)(n.get("account"),o.context.router.history)},i=n,u()(o,i)}return h()(t,e),t.prototype.getHandlers=function(){return{moveUp:this.handleMoveUp,moveDown:this.handleMoveDown,open:this.handleOpen,openProfile:this.handleOpenProfile,mention:this.handleMention,reply:this.handleMention}},t.prototype.renderFollow=function(e,t){return s()(_.HotKeys,{handlers:this.getHandlers()},void 0,s()("div",{className:"notification notification-follow focusable",tabIndex:"0"},void 0,s()("div",{className:"notification__message"},void 0,s()("div",{className:"notification__favourite-icon-wrapper"},void 0,s()("i",{className:"fa fa-fw fa-user-plus"})),s()(M.b,{id:"notification.follow",defaultMessage:"{name} followed you",values:{name:t}})),s()(y.a,{id:e.get("id"),withNote:!1,hidden:this.props.hidden})))},t.prototype.renderMention=function(e){return s()(b.a,{id:e.get("status"),withDismiss:!0,hidden:this.props.hidden,onMoveDown:this.handleMoveDown,onMoveUp:this.handleMoveUp})},t.prototype.renderFavourite=function(e,t){return s()(_.HotKeys,{handlers:this.getHandlers()},void 0,s()("div",{className:"notification notification-favourite focusable",tabIndex:"0"},void 0,s()("div",{className:"notification__message"},void 0,s()("div",{className:"notification__favourite-icon-wrapper"},void 0,s()("i",{className:"fa fa-fw fa-star star-icon"})),s()(M.b,{id:"notification.favourite",defaultMessage:"{name} favourited your status",values:{name:t}})),s()(b.a,{id:e.get("status"),account:e.get("account"),muted:!0,withDismiss:!0,hidden:!!this.props.hidden})))},t.prototype.renderReblog=function(e,t){return s()(_.HotKeys,{handlers:this.getHandlers()},void 0,s()("div",{className:"notification notification-reblog focusable",tabIndex:"0"},void 0,s()("div",{className:"notification__message"},void 0,s()("div",{className:"notification__favourite-icon-wrapper"},void 0,s()("i",{className:"fa fa-fw fa-retweet"})),s()(M.b,{id:"notification.reblog",defaultMessage:"{name} boosted your status",values:{name:t}})),s()(b.a,{id:e.get("status"),account:e.get("account"),muted:!0,withDismiss:!0,hidden:this.props.hidden})))},t.prototype.render=function(){var e=this.props.notification,t=e.get("account"),n={__html:t.get("display_name_html")},o=s()("bdi",{},void 0,s()(k.a,{className:"notification__display-name",href:t.get("url"),title:t.get("acct"),to:"/accounts/"+t.get("id"),dangerouslySetInnerHTML:n}));switch(e.get("type")){case"follow":return this.renderFollow(t,o);case"mention":return this.renderMention(e);case"favourite":return this.renderFavourite(e,o);case"reblog":return this.renderReblog(e,o)}return null},t}(O.a),o.contextTypes={router:g.a.object},o.propTypes={notification:m.a.map.isRequired,hidden:g.a.bool,onMoveUp:g.a.func.isRequired,onMoveDown:g.a.func.isRequired,onMention:g.a.func.isRequired},i)},955:function(e,t,n){"use strict";var o=n(9),i=n(6),a=n(956),s=n(58),r=n(101),c=n(157),l=n(26),u=Object(i.f)({clearMessage:{id:"notifications.clear_confirmation",defaultMessage:"Are you sure you want to permanently clear all your notifications?"},clearConfirm:{id:"notifications.clear",defaultMessage:"Clear notifications"}}),d=function(e){return{settings:e.getIn(["settings","notifications"]),pushSettings:e.get("push_notifications")}},h=function(e,t){var n=t.intl;return{onChange:function(t,n){e("push"===t[0]?Object(c.e)(t.slice(1),n):Object(s.c)(["notifications"].concat(t),n))},onClear:function(){e(Object(l.d)("CONFIRM",{message:n.formatMessage(u.clearMessage),confirm:n.formatMessage(u.clearConfirm),onConfirm:function(){return e(Object(r.g)())}}))}}};t.a=Object(i.g)(Object(o.connect)(d,h)(a.a))},956:function(e,t,n){"use strict";n.d(t,"a",function(){return v});var o=n(2),i=n.n(o),a=n(1),s=n.n(a),r=n(3),c=n.n(r),l=n(4),u=n.n(l),d=n(0),h=n.n(d),f=n(6),p=n(957),g=n(865),v=function(e){function t(){var n,o,i;s()(this,t);for(var a=arguments.length,r=Array(a),l=0;l<a;l++)r[l]=arguments[l];return n=o=c()(this,e.call.apply(e,[this].concat(r))),o.onPushChange=function(e,t){o.props.onChange(["push"].concat(e),t)},i=n,c()(o,i)}return u()(t,e),t.prototype.render=function(){var e=this.props,t=e.settings,n=e.pushSettings,o=e.onChange,a=e.onClear,s=i()(f.b,{id:"notifications.column_settings.alert",defaultMessage:"Desktop notifications"}),r=i()(f.b,{id:"notifications.column_settings.show",defaultMessage:"Show in column"}),c=i()(f.b,{id:"notifications.column_settings.sound",defaultMessage:"Play sound"}),l=n.get("browserSupport")&&n.get("isSubscribed"),u=l&&i()(f.b,{id:"notifications.column_settings.push",defaultMessage:"Push notifications"}),d=l&&i()(f.b,{id:"notifications.column_settings.push_meta",defaultMessage:"This device"});return i()("div",{},void 0,i()("div",{className:"column-settings__row"},void 0,i()(p.a,{onClick:a})),i()("div",{role:"group","aria-labelledby":"notifications-follow"},void 0,i()("span",{id:"notifications-follow",className:"column-settings__section"},void 0,i()(f.b,{id:"notifications.column_settings.follow",defaultMessage:"New followers:"})),i()("div",{className:"column-settings__row"},void 0,i()(g.a,{prefix:"notifications_desktop",settings:t,settingPath:["alerts","follow"],onChange:o,label:s}),l&&i()(g.a,{prefix:"notifications_push",settings:n,settingPath:["alerts","follow"],meta:d,onChange:this.onPushChange,label:u}),i()(g.a,{prefix:"notifications",settings:t,settingPath:["shows","follow"],onChange:o,label:r}),i()(g.a,{prefix:"notifications",settings:t,settingPath:["sounds","follow"],onChange:o,label:c}))),i()("div",{role:"group","aria-labelledby":"notifications-favourite"},void 0,i()("span",{id:"notifications-favourite",className:"column-settings__section"},void 0,i()(f.b,{id:"notifications.column_settings.favourite",defaultMessage:"Favourites:"})),i()("div",{className:"column-settings__row"},void 0,i()(g.a,{prefix:"notifications_desktop",settings:t,settingPath:["alerts","favourite"],onChange:o,label:s}),l&&i()(g.a,{prefix:"notifications_push",settings:n,settingPath:["alerts","favourite"],meta:d,onChange:this.onPushChange,label:u}),i()(g.a,{prefix:"notifications",settings:t,settingPath:["shows","favourite"],onChange:o,label:r}),i()(g.a,{prefix:"notifications",settings:t,settingPath:["sounds","favourite"],onChange:o,label:c}))),i()("div",{role:"group","aria-labelledby":"notifications-mention"},void 0,i()("span",{id:"notifications-mention",className:"column-settings__section"},void 0,i()(f.b,{id:"notifications.column_settings.mention",defaultMessage:"Mentions:"})),i()("div",{className:"column-settings__row"},void 0,i()(g.a,{prefix:"notifications_desktop",settings:t,settingPath:["alerts","mention"],onChange:o,label:s}),l&&i()(g.a,{prefix:"notifications_push",settings:n,settingPath:["alerts","mention"],meta:d,onChange:this.onPushChange,label:u}),i()(g.a,{prefix:"notifications",settings:t,settingPath:["shows","mention"],onChange:o,label:r}),i()(g.a,{prefix:"notifications",settings:t,settingPath:["sounds","mention"],onChange:o,label:c}))),i()("div",{role:"group","aria-labelledby":"notifications-reblog"},void 0,i()("span",{id:"notifications-reblog",className:"column-settings__section"},void 0,i()(f.b,{id:"notifications.column_settings.reblog",defaultMessage:"Boosts:"})),i()("div",{className:"column-settings__row"},void 0,i()(g.a,{prefix:"notifications_desktop",settings:t,settingPath:["alerts","reblog"],onChange:o,label:s}),l&&i()(g.a,{prefix:"notifications_push",settings:n,settingPath:["alerts","reblog"],meta:d,onChange:this.onPushChange,label:u}),i()(g.a,{prefix:"notifications",settings:t,settingPath:["shows","reblog"],onChange:o,label:r}),i()(g.a,{prefix:"notifications",settings:t,settingPath:["sounds","reblog"],onChange:o,label:c}))))},t}(h.a.PureComponent)},957:function(e,t,n){"use strict";n.d(t,"a",function(){return p});var o=n(2),i=n.n(o),a=n(1),s=n.n(a),r=n(3),c=n.n(r),l=n(4),u=n.n(l),d=n(0),h=n.n(d),f=n(6),p=function(e){function t(){return s()(this,t),c()(this,e.apply(this,arguments))}return u()(t,e),t.prototype.render=function(){return i()("button",{className:"text-btn column-header__setting-btn",tabIndex:"0",onClick:this.props.onClick},void 0,i()("i",{className:"fa fa-eraser"})," ",i()(f.b,{id:"notifications.clear",defaultMessage:"Clear notifications"}))},t}(h.a.PureComponent)}});
//# sourceMappingURL=notifications.js.map