# SHA256

Run SHA256 with:

```shell
node sha256 [optional argument]
```

It will output:

```shell
Original String: password
SHA256 encryption: 5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8
```

If no argument is provided, 'password' is used by default.

# AES

Run AES with:

```shell
node aes [optional data] [optional key]
```

It will output:

```shell
Original data: password
Key: secretkey
Encrypted data: U2FsdGVkX1+DMjmI/YYfT1hq9wZIkKA8AemtrQ4/PeA=
Decrypted data: password
```

If no data argument is provided, 'password' is used by default.
If not key argument if provided, 'secretkey' is used by default.
