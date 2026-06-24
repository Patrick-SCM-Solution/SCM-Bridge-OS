(function () {
  var p = location.pathname;
  var file = p.split('/').pop() || 'index.html';
  var inSub = p.indexOf('/checklists/') !== -1 || p.indexOf('/tools/') !== -1;
  var base = inSub ? '../' : '';

  var a = function (f) { return file === f ? ' active' : ''; };
  var pmActive = file === 'index.html' || file === '';
  var clActive = p.indexOf('/checklists/') !== -1;
  var fwActive = file === 'workflow.html';
  var tlActive = /^(handoff-manifest|project-asset-registry|chinese-srs|project-report|scm-dashboard-v3|odoo-playbook|Factory-Onsite-Audit-APP|nda-template|scm-playbook)\.html$/.test(file);

  var root = document.getElementById('site-nav-root');
  if (!root) return;

  root.outerHTML = '<nav class="site-nav">\n'
    + '  <div class="site-nav-inner">\n'
    + '    <a href="' + base + 'index.html" class="nav-brand">\n'
    + '      <span class="s">S</span><span class="c">C</span><span class="m">M</span>\n'
    + '      <span class="sol"> Bridge OS</span>\n'
    + '    </a>\n'
    + '    <div class="nav-links">\n'
    + '      <a href="' + base + 'index.html" class="nav-link' + (pmActive ? ' active' : '') + '">Phase Map</a>\n'
    + '      <div class="nav-dropdown' + (clActive ? ' active' : '') + '">\n'
    + '        <span class="nav-link nav-dropdown-toggle" tabindex="0">Checklists</span>\n'
    + '        <div class="nav-dropdown-menu">\n'
    + '          <a href="' + base + 'checklists/me-assets.html" class="nav-link' + a('me-assets.html') + '">ME Assets</a>\n'
    + '          <a href="' + base + 'checklists/ee-assets.html" class="nav-link' + a('ee-assets.html') + '">EE Assets</a>\n'
    + '          <a href="' + base + 'checklists/cmf-materials.html" class="nav-link' + a('cmf-materials.html') + '">CMF</a>\n'
    + '          <a href="' + base + 'checklists/tooling-molds.html" class="nav-link' + a('tooling-molds.html') + '">Tooling</a>\n'
    + '          <a href="' + base + 'checklists/packaging.html" class="nav-link' + a('packaging.html') + '">Packaging</a>\n'
    + '        </div>\n'
    + '      </div>\n'
    + '      <a href="' + base + 'tools/workflow.html" class="nav-link' + (fwActive ? ' active' : '') + '">Framework</a>\n'
    + '      <div class="nav-dropdown' + (tlActive ? ' active' : '') + '">\n'
    + '        <span class="nav-link nav-dropdown-toggle" tabindex="0">Tools</span>\n'
    + '        <div class="nav-dropdown-menu">\n'
    + '          <a href="' + base + 'tools/Factory-Onsite-Audit-APP%20.html" class="nav-link' + a('Factory-Onsite-Audit-APP .html') + '">Factory Audit</a>\n'
    + '          <a href="' + base + 'tools/nda-template.html" class="nav-link' + a('nda-template.html') + '">NDA Template</a>\n'
    + '          <a href="' + base + 'tools/handoff-manifest.html" class="nav-link' + a('handoff-manifest.html') + '">Handoff Manifest</a>\n'
    + '          <a href="' + base + 'tools/project-asset-registry.html" class="nav-link' + a('project-asset-registry.html') + '">Asset Registry</a>\n'
    + '          <a href="' + base + 'tools/chinese-srs.html" class="nav-link' + a('chinese-srs.html') + '">CN Reference</a>\n'
    + '          <a href="' + base + 'tools/project-report.html" class="nav-link' + a('project-report.html') + '">Project Report</a>\n'
    + '          <a href="' + base + 'tools/scm-dashboard-v3.html" class="nav-link' + a('scm-dashboard-v3.html') + '">Dashboard</a>\n'
    + '          <a href="' + base + 'tools/odoo-playbook.html" class="nav-link' + a('odoo-playbook.html') + '">Odoo Playbook</a>\n'
    + '        </div>\n'
    + '      </div>\n'
    + '    </div>\n'
    + '  </div>\n'
    + '</nav>';
})();
