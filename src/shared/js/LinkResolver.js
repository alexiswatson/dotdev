export default function LinkResolver(doc) {
  if (doc.type === 'work') {
    return `/works/${doc.uid}`;
  }
  else if (doc.type === 'page') {
    return `/${doc.uid}`;
  }
  else if (doc.type === 'home_page') {
    return `/`;
  }
  else if (doc.type === 'works_list') {
    return `/works`;
  }
  else {
    return `/${doc.id}`;
  }
};