export default function LinkResolver(link) {
  if (link.__typename === 'PRISMIC_Work' || link.type === 'work') {
    return `/works/${(link._meta) ? link._meta.uid : link.uid}`;
  }
  else if (link.__typename === 'PRISMIC_Page' || link.type === 'page') {
    return `/${(link._meta) ? link._meta.uid : link.uid}`;
  }
  else if (link.__typename === 'PRISMIC_Home_page' || link.type === 'home_page') {
    return `/`;
  }
  else if (link.__typename === 'PRISMIC_Works_list' || link.type === 'works_list') {
    return `/works`;
  }
  else {
    return `/${(link._meta) ? link._meta.id : link.id}`;
  }
};