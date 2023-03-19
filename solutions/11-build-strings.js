const buildDefinitionList = (items) => {
    if (_.isEmpty(items)) {
      return '';
    }
  
    const definitions = items.map(([term, description]) => `
      <dt>${_.escape(term)}</dt>
      <dd>${_.escape(description)}</dd>
    `);
  
    const definitionsHtml = definitions.join('');
  
    return `
      <dl>
        ${definitionsHtml}
      </dl>
    `;
  };
  
  export default buildDefinitionList;