(function () {
  // Inject nav styles if not already present (self-contained — works on any page)
  if (!document.getElementById('scm-nav-styles')) {
    var style = document.createElement('style');
    style.id = 'scm-nav-styles';
    style.textContent = [
      '.site-nav{background:#132238;border-bottom:1px solid #1E3A55;position:sticky;top:0;z-index:1000;margin:0;width:100%;box-sizing:border-box}',
      '.site-nav-inner{max-width:1100px;margin:0 auto;padding:0 32px;display:flex;align-items:center;justify-content:space-between;height:52px;gap:16px;box-sizing:border-box}',
      '.nav-brand{font-family:"Barlow Condensed",sans-serif;font-size:18px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;text-decoration:none;color:#E8F1F8;white-space:nowrap;flex-shrink:0}',
      '.nav-brand .s{color:#1B9BD4}.nav-brand .c{color:#7DC242}.nav-brand .m{color:#1B9BD4}.nav-brand .sol{color:#E8F1F8;font-weight:400}',
      '.nav-links{display:flex;align-items:center;gap:2px}',
      '.nav-link{font-family:"Barlow Condensed",sans-serif;font-size:13px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#7A9BB5;text-decoration:none;padding:6px 10px;border-radius:4px;transition:all .15s;white-space:nowrap;cursor:pointer}',
      '.nav-link:hover{color:#E8F1F8;background:rgba(255,255,255,.05)}',
      '.nav-link.active{color:#1B9BD4}',
      '.nav-dropdown{position:relative}',
      '.nav-dropdown-toggle{display:flex;align-items:center;gap:3px;user-select:none}',
      '.nav-dropdown-toggle::after{content:"▾";font-size:9px;opacity:.5}',
      '.nav-dropdown.active>.nav-dropdown-toggle{color:#1B9BD4}',
      '.nav-dropdown-menu{display:none;position:absolute;top:calc(100% + 4px);left:0;background:#132238;border:1px solid #1E3A55;border-radius:6px;min-width:180px;z-index:200;padding:4px;box-shadow:0 8px 24px rgba(0,0,0,.5)}',
      '.nav-dropdown:hover .nav-dropdown-menu,.nav-dropdown:focus-within .nav-dropdown-menu{display:block}',
      '.nav-dropdown-menu .nav-link{display:block;border-radius:4px}'
    ].join('');
    document.head.appendChild(style);
  }

  var p = location.pathname;
  var file = p.split('/').pop() || 'index.html';
  var inSub = p.indexOf('/checklists/') !== -1 || p.indexOf('/tools/') !== -1;
  var base = inSub ? '../' : '';

  var a = function (f) { return file === f ? ' active' : ''; };
  var pmActive = file === 'index.html' || file === '';
  var clActive = p.indexOf('/checklists/') !== -1;
  var fwActive = file === 'workflow.html';
  var tlActive = /^(handoff-manifest|project-asset-registry|chinese-srs|project-report|scm-dashboard-v3|odoo-playbook|Factory-Onsite-Audit-APP |fqc-photo-audit|nda-template|scm-playbook|sow-template|factory-visit-report|supplier-pipeline|rfi-template|rfq-template|fabric-techpack|project-brief|trd-template|client-dashboard)\.html$/.test(file);

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
    + '          <a href="' + base + 'tools/fqc-photo-audit.html" class="nav-link' + a('fqc-photo-audit.html') + '">FQC Photo Audit</a>\n'
    + '          <a href="' + base + 'tools/factory-visit-report.html" class="nav-link' + a('factory-visit-report.html') + '">Visit Report</a>\n'
    + '          <a href="' + base + 'tools/project-brief.html" class="nav-link' + a('project-brief.html') + '">Project Brief</a>\n'
    + '          <a href="' + base + 'tools/trd-template.html" class="nav-link' + a('trd-template.html') + '">TRD</a>\n'
    + '          <a href="' + base + 'tools/supplier-pipeline.html" class="nav-link' + a('supplier-pipeline.html') + '">Supplier Pipeline</a>\n'
    + '          <a href="' + base + 'tools/rfi-template.html" class="nav-link' + a('rfi-template.html') + '">RFI Template</a>\n'
    + '          <a href="' + base + 'tools/rfq-template.html" class="nav-link' + a('rfq-template.html') + '">RFQ Template</a>\n'
    + '          <a href="' + base + 'tools/nda-template.html" class="nav-link' + a('nda-template.html') + '">NDA Template</a>\n'
    + '          <a href="' + base + 'tools/handoff-manifest.html" class="nav-link' + a('handoff-manifest.html') + '">Handoff Manifest</a>\n'
    + '          <a href="' + base + 'tools/project-asset-registry.html" class="nav-link' + a('project-asset-registry.html') + '">Asset Registry</a>\n'
    + '          <a href="' + base + 'tools/chinese-srs.html" class="nav-link' + a('chinese-srs.html') + '">CN Reference</a>\n'
    + '          <a href="' + base + 'tools/project-report.html" class="nav-link' + a('project-report.html') + '">Project Report</a>\n'
    + '          <a href="' + base + 'tools/client-dashboard.html" class="nav-link' + a('client-dashboard.html') + '">Client Dashboard</a>\n'
    + '          <a href="' + base + 'tools/scm-dashboard-v3.html" class="nav-link' + a('scm-dashboard-v3.html') + '">Internal Dashboard</a>\n'
    + '          <a href="' + base + 'tools/odoo-playbook.html" class="nav-link' + a('odoo-playbook.html') + '">Odoo Playbook</a>\n'
    + '          <a href="' + base + 'tools/fabric-techpack.html" class="nav-link' + a('fabric-techpack.html') + '">Tech Pack</a>\n'
    + '          <a href="' + base + 'tools/sow-template.html" class="nav-link' + a('sow-template.html') + '">SOW Template</a>\n'
    + '        </div>\n'
    + '      </div>\n'
    + '    </div>\n'
    + '  </div>\n'
    + '</nav>';
})();
