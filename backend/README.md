# DevDimensions PHP contact endpoint

Serve `contact.php` from the same PHP-enabled host as the built React site so the frontend can post to `/backend/contact.php` without changing its endpoint URL.

The endpoint uses PHP's `mail()` transport. Set `DEV_DIMENSIONS_CONTACT_TO` in the host environment to change the recipient; it defaults to `info@devdimensions.com`. The frontend reports an actionable error when the host has no mail transport configured.
