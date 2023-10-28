import { config_contact_details } from '../configs/emailing';

export function getNativeMailClientLink(
	_email: string | null,
	_body: string | null,
	_name: string | null
) {
	if (!_email || !_body || !_name) return null;

	const body = `${_body}\n\n\n\n\n——————————————————\nname: ${_name}\nemail: ${_email}`;

	return `mailto:${
		config_contact_details.defaultEmail
	}?subject=${encodeURIComponent(
		config_contact_details.default_subject
	)}&body=${encodeURIComponent(body)}`;
}
