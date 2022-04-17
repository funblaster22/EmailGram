<script>
import {user, handleAuthClick, handleSignoutClick} from "../lib/gapi.ts";
</script>

{#if $user}
    <button on:click={handleSignoutClick}>Sign out</button>
{:else}
    <button on:click={handleAuthClick}>Sign in</button>
{/if}

<div class="px-6 py-2">
    <div class="settingGroup">
        Messages
        <details>
            <summary>🔒 Security</summary>
            hidden
        </details>
        <details>
            <summary>💬 Message requests</summary>
            <small>When enabled, messages from new senders will be sent here <!-- like imbox --></small>
            <ul>
                <li><label><input type="checkbox" name="requests"> Enable</label></li>
            </ul>
        </details>
    </div>
    <div class="settingGroup">
        UI
        <details>
            <summary>☀️🌙 Dark mode</summary>
            <ul>
                <li><label><input type="radio" name="dark" value="system"> System</label></li>
                <li><label><input type="radio" name="dark" value="on"> On</label></li>
                <li><label><input type="radio" name="dark" value="off"> Off</label></li>
            </ul>
        </details>
        <details>
            <summary>👁️ Read receipts</summary>
            <small>Send a tracker so you can see when the recipient opens your message</small>
            <ul>
                <li><label><input type="radio" name="receipt" value="on"> All messages</label></li>
                <li><label><input type="radio" name="receipt" value="off"> Specific messages</label></li>
            </ul>
        </details>
        <details>
            <summary>✏️ Editable messages</summary>
            <small>Send emails as images so that they can be edited after sent</small>
            <ul>
                <li><label><input type="radio" name="editable" value="on"> All messages</label></li>
                <li><label><input type="radio" name="editable" value="off"> Specific messages</label></li>
            </ul>
        </details>
        <details>
            <summary>📥 Filters</summary>
            <!-- TODO: clicking on radio button should uncheck it -->
            <small>Change what emails show up in feed or messages (supports Gmail search syntax)</small>
            <fieldset>
                <legend>Feed</legend>
                <ul>
                    <li><input name="new-feed-rule" placeholder="New rule"></li>
                    <li><label><input type="radio" name="filter-default" value="feed"> Everything else</label></li>
                </ul>
            </fieldset>
            <fieldset>
                <legend>Messages</legend>
                <ul>
                    <li><input name="new-feed-rule" placeholder="New rule"></li>
                    <li><label><input type="radio" name="filter-default" value="messages"> Everything else</label></li>
                </ul>
            </fieldset>
            <fieldset>
                <legend>Security</legend>
                <ul>
                    <li><input name="new-feed-rule" placeholder="New rule"></li>
                    <li><label><input type="radio" name="filter-default" value="security"> Everything else</label></li>
                </ul>
            </fieldset>
        </details>
        <details>
            <summary>👤👣 Header/footer</summary>
            <small>Modify the automaticly-generated content before and after your email</small>
            <ul>
                <!-- TODO: prevent sending email with this option if the recipient's courtesy title is unknown (prompt in UI & save to prefix of Google contact) -->
                <!-- see https://www.noslangues-ourlanguages.gc.ca/en/writing-tips-plus/gender-inclusive-writing-correspondence#an4 -->
                <li><label><input type="checkbox" name="formal" checked> Address by last name</label></li>
                <li><label>Salutation <small>(%s where the recipient's name should appear):</small> <input type="text" name="salutation" value="Dear %s:"></label></li>
                <li><label>Footer<div contenteditable="true">Sincerely,<br />Name</div></label></li>
            </ul>
        </details>
    </div>
    <div class="settingGroup">
        Help
        <details>
            <summary>⚠️ Report a problem</summary>
            hidden
        </details>
        <details>
            <summary>📖 Legal</summary>
            hidden
        </details>
    </div>
</div>

<style>
    summary {
        cursor: pointer;
    }
    
    .settingGroup {
        border-radius: 3px;
        background-color: lightgray;
        margin-bottom: 1em;
        padding: 0.25rem;
    }
</style>