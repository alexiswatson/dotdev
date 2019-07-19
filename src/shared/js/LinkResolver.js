export default function LinkResolver(link) {
  if (link.type === 'PRISMIC_Work') {
    return `/works/${link._meta.uid}`;
  }
  else if (link.__typename === 'PRISMIC_Page') {
    return `/${link._meta.uid}`;
  }
  else if (link.type === 'PRISMIC_Home_page') {
    return `/`;
  }
  else if (link.type === 'PRISMIC_Works_list') {
    return `/works`;
  }
  else {
    return `/${link._meta.id}`;
  }
};