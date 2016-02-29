(function() {

    xtag.register('tiny-table', {
        content: function() {/*
            <div class="table">
                <div class="row head">
                    <div class="cell center middle">Rank</div>
                    <div class="cell middle"><a class="link">User</a></div>
                    <div class="cell center middle"><a class="link sort icon down right">Received <i class="fa fa-sort-asc"></i><i class="fa fa-sort-desc"></i></a></div>
                    <div class="cell center middle"><a class="link icon">Sent</a> <i class="fa fa-info-circle"></i></div>
                    <div class="cell right middle"></div>
                </div>
                <div class="row">
                    <div class="cell center middle">1</div>
                    <div class="cell middle">asd@tinypulse.com</div>
                    <div class="cell center middle">479</div>
                    <div class="cell center middle">562</div>
                    <div class="cell right middle"><tiny-button>View Cheers</tiny-button></div>
                </div>
                <div class="row">
                    <div class="cell center middle">2</div>
                    <div class="cell middle">qwasdasde@tinypulse.com</div>
                    <div class="cell center middle">479</div>
                    <div class="cell center middle">562</div>
                    <div class="cell right middle"><tiny-button>View Cheers</tiny-button></div>
                </div>
                <div class="row">
                    <div class="cell center middle">2</div>
                    <div class="cell middle">qwasdasde@tinypulse.com</div>
                    <div class="cell center middle">479</div>
                    <div class="cell center middle">562</div>
                    <div class="cell right middle"><tiny-button>View Cheers</tiny-button></div>
                </div>
            </div>
        */},
        lifecycle: {
            created: function() {},
            inserted: function() {
                if (this.lastTable) {
                    console.log('TINYtables rendered time', new Date() - window.startTime, 'ms');
                }
            },
            removed: function() {},
            attributeChanged: function() {}
        },
        events: {

        },
        accessors: {
            lastTable: {
                attribute: {
                    boolean: true
                }
            }
        },
        methods: {

        }
    });

    xtag.register('tiny-button', {
        lifecycle: {
            created: function() {
                var self = this;

                self.xtag.iconEl = document.createElement('i');
                self.xtag.contentEl = document.createElement('a');

                xtag.addClass(self.xtag.iconEl, 'fa fa-eye');
                xtag.addClass(self.xtag.contentEl, 'button green icon');

                // Remove content and put into the content
                self.xtag.contentEl.innerHTML = self.innerHTML;
                self.innerHTML = '';

                self.appendChild(self.xtag.contentEl);
                self.xtag.contentEl.insertBefore(self.xtag.iconEl, self.xtag.contentEl.firstChild);
            },
            inserted: function() {},
            removed: function() {},
            attributeChanged: function() {}
        },
        events: {

        },
        accessors: {

        },
        methods: {

        }
    });

})();
